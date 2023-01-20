import { ModalBody, Overlay, OrderDetails, Actions } from './styles';
import CloseIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrancy } from '../../utils/formatCurrancy';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  onChangeOrderStatus: () => Promise<void>;
  isLoading: boolean;
}
export const OrderModal = ({
  visible,
  order,
  onClose,
  onCancelOrder,
  isLoading,
  onChangeOrderStatus,
}: OrderModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((accumulator, { quantity, product }) => {
    return accumulator + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={CloseIcon} alt="[icone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>{order.status === 'WAITING' && '⏱️'}</span>
            <span>{order.status === 'IN_PRODUCTION' && '👨🏾‍🍳'}</span>
            <span>{order.status === 'DONE' && '✅'}</span>
            <strong>
              <span>{order.status === 'WAITING' && 'Fila de Espera'}</span>
              <span>{order.status === 'IN_PRODUCTION' && 'Em Produção'}</span>
              <span>{order.status === 'DONE' && 'Pronto'}</span>
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, quantity, product }) => (
              <div className="item" key={_id}>
                <img
                  width="48"
                  height="28.51"
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                />

                <span className="quantity">{quantity}X</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrancy(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrancy(total)}</strong>
          </div>
          <Actions>
            {order.status !== 'DONE' && (
              <button
                type="button"
                className="primary"
                disabled={isLoading}
                onClick={onChangeOrderStatus}
              >
                <span>
                  {order.status === 'WAITING' && '👨🏾‍🍳'}
                  {order.status === 'IN_PRODUCTION' && '✅'}
                </span>
                <strong>
                  {order.status === 'WAITING' && 'Iniciar Produção'}
                  {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
                </strong>
              </button>
            )}
            <button type="button" className="secondary" onClick={onCancelOrder}>
              <span>cancelar pedido</span>
            </button>
          </Actions>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
};
