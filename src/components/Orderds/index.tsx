import { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';

import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { api } from '../../utils/api';

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('orders@new', (order) => {
      console.log('Novo Pedido cadastrado no  banco de dados', order);
      setOrders((prevState) => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
      console.log(data);
    });
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter(
    (order) => order.status === 'IN_PRODUCTION'
  );
  const Done = orders.filter((order) => order.status === 'DONE');

  const handleCancelOrder = (orderId: string) => {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  };

  const handleorderStatusChange = (
    orderId: string,
    status: Order['status']
  ) => {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  };

  console.log(orders);
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleorderStatusChange}
      />
      <OrdersBoard
        icon="👨🏾‍🍳"
        title="Em Preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleorderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={Done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleorderStatusChange}
      />
    </Container>
  );
};
