import React from "react";

function OrderList({ orders }) {
  return (
    <ul className="space-y-2">
      {orders.map((order) => (
        <li key={order.id} className="border p-2 rounded">
          Order #{order.id} - {order.status}
        </li>
      ))}
    </ul>
  );
}

export default OrderList;
