const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div>
            <p>
              Hecho con <strong>❤</strong> en <strong>Ecuador</strong>
            </p>
            <p>2021-{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
