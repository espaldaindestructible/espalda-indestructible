import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background pt-24">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">🍪 Política de Cookies</h1>

          <section className="mb-8">
            <p className="text-muted-foreground mb-4">
              UNBREAKABLE BACK LLC informa en su política de cookies acerca del uso de las cookies en su página web: <strong>https://espaldaindestructible.com</strong>
            </p>
            <h2 className="text-2xl font-bold mb-4">¿Qué son las cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información.
            </p>
            <p className="text-muted-foreground">
              Entre otros, permiten a una página web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Política de cookies: Tipos de cookies</h2>
            <p className="text-muted-foreground mb-4">Según quien sea la entidad que gestione el dominio se pueden distinguir dos tipos:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Cookies propias:</strong> Aquéllas que se envían al terminal del usuario desde un equipo gestionado por el propio editor, desde el que se presta el servicio solicitado por el usuario.</li>
              <li><strong>Cookies de terceros:</strong> Aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos a través de las cookies.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado por el propio editor pero la información que se recoja mediante éstas sea gestionada por un tercero, no pueden ser consideradas como cookies propias.
            </p>
            <p className="text-muted-foreground mb-4">Existe también una segunda clasificación según el plazo de tiempo que permanecen almacenadas en el navegador del cliente, pudiendo tratarse de:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Cookies de sesión:</strong> Diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se emplean para almacenar información que solo interesa conservar para la prestación del servicio solicitado en una sola ocasión.</li>
              <li><strong>Cookies persistentes:</strong> Los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, que puede ir de unos minutos a varios años.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">Clasificación de 6 tipos de cookies según la finalidad:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Las Cookies técnicas:</strong> Aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios (controlar tráfico, identificar sesión, partes restringidas, proceso de compra, etc.).</li>
              <li><strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con características generales predefinidas como el idioma, tipo de navegador, configuración regional, etc.</li>
              <li><strong>Cookies de análisis:</strong> Permiten el seguimiento y análisis del comportamiento de los usuarios para introducir mejoras en función del análisis de los datos de uso.</li>
              <li><strong>Cookies publicitarias:</strong> Permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios.</li>
              <li><strong>Cookies de publicidad comportamental:</strong> Almacenan información del comportamiento del usuario obtenida a través de la observación continuada de sus hábitos de navegación.</li>
              <li><strong>Cookies de RRSS externas:</strong> Se utilizan para interactuar con el contenido de diferentes plataformas de redes sociales.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Desactivación y eliminación de cookies</h2>
            <p className="text-muted-foreground mb-4">
              Tienes la opción de permitir, bloquear o eliminar las cookies mediante la configuración de las opciones del navegador instalado en su equipo. Al desactivar cookies, algunos de los servicios disponibles podrían dejar de estar operativos.
            </p>
            <p className="text-muted-foreground mb-4">Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante los siguientes enlaces:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Microsoft Internet Explorer o Microsoft Edge:</strong> <a href="http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Enlace de ayuda</a></li>
              <li><strong>Mozilla Firefox:</strong> <a href="http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Enlace de ayuda</a></li>
              <li><strong>Chrome:</strong> <a href="https://support.google.com/accounts/answer/61416?hl=es" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Enlace de ayuda</a></li>
              <li><strong>Safari:</strong> <a href="http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Enlace de ayuda</a></li>
              <li><strong>Opera:</strong> <a href="http://help.opera.com/Linux/10.60/es-ES/cookies.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Enlace de ayuda</a></li>
            </ul>
            <p className="text-muted-foreground mb-2">Además, puede gestionar el almacén de cookies a través de herramientas como:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Ghostery:</strong> www.ghostery.com</li>
              <li><strong>Your Online Choices:</strong> www.youronlinechoices.com/es/</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies utilizadas en espaldaindestructible.com</h2>
            <p className="text-muted-foreground mb-4">
              A continuación se identifican las cookies que están siendo utilizadas en este portal así como su tipología y función.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Aceptación de la Política de cookies</h3>
            <p className="text-muted-foreground mb-4">
              <strong>https://espaldaindestructible.com</strong> asume que usted acepta el uso de cookies, mostrando información sobre su política en la parte inferior. Ante esta información puede:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Aceptar cookies:</strong> No se volverá a visualizar este aviso al acceder a cualquier página del portal durante la presente sesión.</li>
              <li><strong>Cerrar:</strong> Se oculta el aviso en la presente página.</li>
              <li><strong>Modificar su configuración:</strong> Podrá obtener más información sobre qué son las cookies en la Política de cookies de: <strong>https://espaldaindestructible.com</strong></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;
