const paxinasObxecto = {
    xestion: {
        bibliotecaAdmin: "",
        usuarios:"",
        prestamos:""
    },
    paxinas: {
        inicioAdmin:`  <!------------------------------------------------------->
    <!-----------------------   HEADER   -------------------->
    <!------------------------------------------------------->
    <header>
      <nav>
        <ul>
          <button class="cerrar-sesion">Cerrar Sesión</button>
        </ul>
      </nav>
      <div class="logo-centrado">
        <div class="logo-index"><img src="../imaxes/av_canido_logo.png"></div>
        <h2>BIBLIOTECA CÍVICA</h2>
    </header>
    <!------------------------------------------------------->
    <!------------------------   MAIN   --------------------->
    <!------------------------------------------------------->
    <section class="pax-inicio">
        <a class="links-xestion" href="/xestion-biblioteca">XESTIÓN BIBLIOTECA</a>
        <a class="links-xestion" href="/xestion-prestamos">XESTIÓN PRÉSTAMOS</a>
        <a class="links-xestion" href="/xestion-usuarios">XESTIÓN USUARIOS</a>
    </section>
    <!------------------------------------------------------->
    <!-----------------------   FOOTER   -------------------->
    <!------------------------------------------------------->
    <footer>
        <p class="copyright"></p>
    </footer>
    `,
        formularioLibro:"",
        formularioPrestamo:""
    },
    


}
module.exports={paxinasObxecto}