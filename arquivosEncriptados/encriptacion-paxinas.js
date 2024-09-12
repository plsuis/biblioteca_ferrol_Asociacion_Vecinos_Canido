const paxinasObxecto = {
    xestion: {
        bibliotecaAdmin: `
    <!------------------------------------------------------->
    <!-----------------------   HEADER   -------------------->
    <!------------------------------------------------------->
    <header class="header-xestion">
      <div class="logo-xestion"><img src="../imaxes/av_canido_logo.png"></div>
      <h2>XESTIÓN DA BIBLIOTECA</h2>
  </header>
    <!------------------------------------------------------->
    <!------------------------   MAIN   --------------------->
    <!------------------------------------------------------->
    <section class="pax-xestion">
      <div>
        
        <a class="links-form-libro" href="/formulario-libro">ENGADIR NOVO LIBRO</a>
      </div>
      <div class="lista-libros">
          <h3>LISTA DE LIBROS</h3> <!-- <button class="libros-pdf"><img src="../imaxes/file-type-pdf.svg"></button> -->
          <table class="tabla-libros">
            <theader>
              <th>Título</th>
              <th>Autor</th>
              <th>ISBN</th>
              <th>Editorial</th>
              <th>Ano de Edición</th>
              <th>Xénero</th>
              <th>Prestado</th>
              <th></th>
            </theader>
            <tbody class="body-tabla"></tbody>
          </table>
      </div>
              
    </section>
    <!------------------------------------------------------->
    <!-----------------------   FOOTER   -------------------->
    <!------------------------------------------------------->
    <footer>
        <p class="copyright"></p>
    </footer>
    `,
        usuarios:`
    <!------------------------------------------------------->
    <!-----------------------   HEADER   -------------------->
    <!------------------------------------------------------->
    <header class="header-xestion">
      <div class="logo-index"><img src="../imaxes/av_canido_logo.png"></div>
      <h2>NOVO USUARIO</h2>
      
    </header>
    <!------------------------------------------------------->
    <!------------------------   MAIN   --------------------->
    <!------------------------------------------------------->
    <section class="pax-inicio-sesion">
      <div class="formulario">
        <form id="form-novo-usuario">
            <div>
            <label>Nome<span class="asterisco"> *</span></label>
            <input id="nome-usuario" type="text" name="Nome_Usuario" required/>
            </div>
            <div>
            <label>1º Apelido<span class="asterisco"> *</span></label>
            <input id="primer-apelido-usuario" type="text" name="Apelido_1_Usuario" required/>
            </div>
            
            <div>
            <label>2º Apelido<span class="asterisco"> *</span></label>
            <input id="segundo-apelido-usuario" type="text" name="Apelido_2_Usuario" required/>
          </div>
            <div>
            <label>DNI<span class="asterisco"> *</span></label>
            <input id="dni-usuario" type="text" name="DNI_Usuario" required/>
          </div>
          <div>
            <label>ROL<span class="asterisco"> *</span></label>
            <select id="rol-usuario" name="ROL_Usuario">
              <option>--Sen Rol--</option>
              <option>socio</option>
              <option>administrativo</option>
            </select>
          </div>
            <div class="boton-formulario">
            <button type="submit" class="boton-aceptar-usuario">CONFIRMAR</button>
            <button type="reset" class="boton-cancelar-usuario">CANCELAR</button>
          </div>
          </form>
      </div>
      <p class="detalle-formulario">Aqueles campos cun asterisco (<span class="asterisco">*</span>) indican que o campo e OBLIGATORIO</p>
    </section>
    <hr/>
    <section>
      <h2>LISTA DE USUARIOS</h2>
      <div class="lista-usuarios">
        <table class="tabla-usuarios">
          <theader>
            <th>Nome</th>
            <th>1º Apelido</th>
            <th>2º Apelido</th>
            <th>DNI</th>
            <th>Rol</th>
          </theader>
          <tbody class="body-tabla"></tbody>
        </table>
    </div>
    </section>
    <!------------------------------------------------------->
    <!-----------------------   FOOTER   -------------------->
    <!------------------------------------------------------->
    <footer>
        <p class="copyright"></p>
    </footer>`,
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
        formularioLibro:`<!------------------------------------------------------->
    <!-----------------------   HEADER   -------------------->
    <!------------------------------------------------------->
    <header class="header-xestion">
      <div class="logo-xestion"><img src="../imaxes/av_canido_logo.png"></div>

  </header>
  
    <!------------------------------------------------------->
    <!------------------------   MAIN   --------------------->
    <!------------------------------------------------------->
    <section class="pax-form">
      
      <h2>ENGADIR NOVO LIBRO</h2>
        <div class="formulario">
          <form id="form-novo-libro">
            <div>
            <label>Título<span class="asterisco"> *</span></label>
            <input id="input-titulo" type="text" name="Titulo_Libros" required/>
            </div>
            <div>
            <label>Autor<span class="asterisco"> *</span></label>
            <input id="input-autor" type="text" name="Autor_Libros" required/>
            </div>
            <div>
            <label>Xénero<span class="asterisco"> *</span></label>
            <select id="input-xenero" name="Xenero_Libros" required>
              <option>--Sen Especificar--</option>
              <option>Literatura Internacional</option>
              <option>Literatura Sudamericana</option>
              <option>Literatura Española Contemporánea</option>
              <option>Literatura Galega</option>
              <option>Literatura de Ferrol</option>
              <option>Política e Historia</option>
              <option>Poesía</option>
              <option>Crítica Literaria</option>
              <option>Friki</option>
              <option>Literatura Infantil</option>
              <option>Manuales</option>
              <option>Arte e Historia do Arte</option>
              <option>Diccionarios</option>
              <option>Filosofía e Pensamento</option>
              <option>Antigos e Curiosos</option>
              <option>Clásicos</option>
              <option>Novela Negra</option>
              <option>Cine</option>
              <option>Libros de Consulta</option>
            </select>
          </div>
            <div>
            <label>Editorial<span class="asterisco"> *</span></label>
            <input id="input-editorial" type="text" name="Editorial_Libros" required/>
          </div>
          <div>
            <label>Ano de Edición<span class="asterisco"> *</span></label>
            <input id="input-ano-libro" type="text" name="Anho_edicion_Libros" required/>
          </div>
            <div>
            <label>ISBN (sin espacios)<span class="asterisco"> *</span></label>
            <input id="input-isbn" type="text" name="Codigo_Libros" required/>
          </div>
            <div class="boton-formulario">
            <button type="submit" class="boton-enviar-libro">CONFIRMAR</button>
            <button type="reset" class="boton-cancelar-libro">CANCELAR</button>
          </div>
          

          </form>
          
        </div>
        <p class="detalle-formulario">Aqueles campos cun asterisco (<span class="asterisco">*</span>) indican que o campo e OBLIGATORIO</p>
    </section>
    <!------------------------------------------------------->
    <!-----------------------   FOOTER   -------------------->
    <!------------------------------------------------------->
    <footer>
        <p class="copyright"></p>
    </footer>`,
        formularioPrestamo:``
    },
    


}
module.exports={paxinasObxecto}