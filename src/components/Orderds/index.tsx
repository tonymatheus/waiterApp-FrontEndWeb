import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '637ac72ac4ffb95364c88b0a',
    table: 'Mesa 10',
    status: 'IN_PRODUCTION',
    products: [
      {
        product: {
          name: 'batata',
          imagePath: '1668990761993-cerveja.png',
          price: 40,
        },
        quantity: 2,
        _id: '6377731a071a07202fd5e41a',
      },
      {
        product: {
          name: 'Pizza de frango',
          imagePath: '1668991415749-frango-catupiry.png',
          price: 40,
        },
        quantity: 2,
        _id: '637ac97dc4ffb95364c88b0e',
      },
    ],
  },
];

export const Orders = () => {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨🏾‍🍳" title="Em Preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto" orders={[]} />
    </Container>
  );
};
