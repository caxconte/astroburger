import Button from "../../UI/button/button";
import OrderItem from "../kitchen/toDo/todo_order_itens";
import "../kitchen/kitchen.scss";

function OrderDone({ onClick, list }) {
  return list.map((order) => {
    return (
      <article className="kitchen-article" key={order.id}>
        <header className="kitchen-article-header">
          <p>Mesa {order.table}</p>
          <p>{order.client_name}</p>
        </header>

        <main className="kitchen-main">
          <div className="kitchen-control-order">
            <div className="kitchen-control-order-header">
              {order.status === "delivered" ? (
                <>
                  <p className="item-qdt-list">Status: {order.status}</p>
                  <p className="item-order-list">
                    Tempo total de preparo: x minutos
                  </p>
                </>
              ) : (
                <OrderItem order={order} />
              )}
            </div>
          </div>
        </main>

        {order.status === "done" ? (
          <Button
            variant="start-btn"
            onClick={(e) => {
              e.preventDefault();
              onClick(order.id, "delivered");
            }}
          >
            Pedido Entregue
          </Button>
        ) : null}
      </article>
    );
  });
}

export default OrderDone;
