import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';
import { api } from '../../utils/api';

import { toast } from 'react-toastify';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}
export const OrdersBoard = ({
  title,
  icon,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setisLoading] = useState(false);

  const handleOpenModal = (order: Order) => {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  function handleCloseModal() {
    setIsModalVisible(true);
    setSelectedOrder(null);
  }

  const handleChangeOrderStatus = async () => {
    setisLoading(true);

    const status =
      selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    const formattedStatusName =
      selectedOrder?.status === 'WAITING' ? 'Em Preparação' : 'Pronto';

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(
      `O Pedido da Mesa ${selectedOrder?.table} teve o Status alterado para ${formattedStatusName}`
    );

    onChangeOrderStatus(selectedOrder!._id, status);
    setisLoading(false);
    setIsModalVisible(false);
  };

  const handleCancelOrder = async () => {
    setisLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.error(
      `O Pedido da mesa ${selectedOrder?.table} foi cancelado com sucesso`
    );
    onCancelOrder(selectedOrder!._id);
    setisLoading(false);
    setIsModalVisible(false);
  };

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
};
