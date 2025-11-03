export default function BookingsPage() {
  return (
    <div style={{ width: "calc(100vw - 290px)" }}>
      <h2>Bookings</h2>
      <div>
        <div>
          <h3>List of bookings</h3>
          <div>
            <button>Mark ad used</button>
            <button>+ Add booking</button>
          </div>
        </div>
        <div>
          <div>
            <input type="search" />
            <button>Other filters...</button>
          </div>
          <div>
            <p>Order by</p>
            <button>Creation date</button>
            <button>Order</button>
          </div>
        </div>
        {/* table */}
      </div>
    </div>
  )
}
