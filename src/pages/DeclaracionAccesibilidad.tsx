import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DeclaracionAccesibilidad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background pt-24">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">♿ Accesibilidad</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. INTRODUCCIÓN</h2>
            <p className="text-muted-foreground mb-4">
              UNBREAKALE BACK LLC, se ha comprometido a hacer accesible su sitio web y su aplicación para dispositivos móviles, de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.
            </p>
            <p className="text-muted-foreground">
              La presente declaración de accesibilidad se aplica a https://entrenaconrobertogalvan.com/
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. RECOMENDACIONES PARA SU APLICACIÓN EN EL CONTEXTO NACIONAL</h2>
            <p className="text-muted-foreground mb-4">
              La declaración de accesibilidad puede referirse a uno o varios sitios web y/o a una o varias aplicaciones para dispositivos móviles siempre y cuando tengan la misma situación de cumplimiento, el mismo contenido no accesible y les aplique también la misma información del resto de la declaración. Sin embargo, por claridad en la lectura e interpretación para los usuarios se recomienda que exista una declaración de accesibilidad para cada sitio web o para cada aplicación móvil.
            </p>
            <p className="text-muted-foreground mb-4">
              Indicar el alcance de la declaración listando los enlaces de los sitios web y/o las aplicaciones para dispositivos móviles a los que aplica. En el caso de aplicaciones para dispositivos móviles, deben facilitarse los datos (sistema operativo, versión…) y la fecha de la versión.
            </p>
            <p className="text-muted-foreground">
              La referencia a la “legislación nacional que traspone la Directiva” es el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2.2. SITUACIÓN DE CUMPLIMIENTO</h2>
            <p className="text-muted-foreground mb-4">
              Este sitio web es parcialmente conforme con los requisitos de accesibilidad a la falta de conformidad de los aspectos a continuación:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Vídeo de cabecera de la home.</li>
              <li>Ciertos aspectos del formulario de contacto.</li>
              <li>Uso ocasional de colores con bajo contraste.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2.3. PREPARACIÓN DE LA PRESENTE DECLARACIÓN DE ACCESIBILIDAD</h2>
            <p className="text-muted-foreground">
              La presente declaración fue preparada el 14/03/2023. una autoevaluación llevada a cabo por el organismo del sector público.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2.4. OBSERVACIONES Y DATOS DE CONTACTO</h2>
            <p className="text-muted-foreground mb-4">
              Puede realizar comunicaciones sobre requisitos de accesibilidad (artículo 10.2.a) del RD 1112/2018) como por ejemplo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>informar sobre cualquier posible incumplimiento por parte de este sitio web</li>
              <li>transmitir otras dificultades de acceso al contenido</li>
              <li>formular cualquier otra consulta o sugerencia de mejora relativa a la accesibilidad del sitio web a través de la siguiente dirección de correo electrónico: <strong>info@entrenaconrobertogalvan.com</strong></li>
            </ul>
            <p className="text-muted-foreground mb-2 font-semibold">Puede presentar:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>una Queja relativa al cumplimiento de los requisitos del RD 1112/2018 o</li>
              <li>
                una Solicitud de Información accesible relativa a:
                <ul className="list-disc list-inside pl-6 mt-1 space-y-1">
                  <li>contenidos que están excluidos del ámbito de aplicación del RD 1112/2018 según lo establecido por el artículo 3, apartado 4</li>
                  <li>contenidos que están exentos del cumplimiento de los requisitos de accesibilidad por imponer una carga desproporcionada.</li>
                </ul>
              </li>
            </ul>
            <p className="text-muted-foreground">
              En la Solicitud de información accesible, se debe concretar, con toda claridad, los hechos, razones y petición que permitan constatar que se trata de una solicitud razonable y legítima.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2.5. PROCEDIMIENTO DE APLICACIÓN</h2>
            <p className="text-muted-foreground mb-4">
              Si una vez realizada una solicitud de información accesible o queja, ésta hubiera sido desestimada, no se estuviera de acuerdo con la decisión adoptada, o la respuesta no cumpliera los requisitos contemplados en el artículo 12.5, la persona interesada podrá iniciar una reclamación. Igualmente se podrá iniciar una reclamación en el caso de que haya transcurrido el plazo de veinte días hábiles sin haber obtenido respuesta.
            </p>
            <p className="text-muted-foreground">
              La reclamación puede ser presentada través del de la Instancia Genérica de la Sede electrónica del Ministerio de Asuntos Económicos y Transformación Digital, así como en el resto de opciones recogidas en la Ley 39/ 2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeclaracionAccesibilidad;
