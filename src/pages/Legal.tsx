const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border py-4 px-4">
        <div className="container max-w-4xl mx-auto flex gap-6 justify-center">
          <a
            href="#consent"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Читать Согласие
          </a>
          <a
            href="#policy"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Читать Политику
          </a>
        </div>
      </nav>

      <main className="container max-w-4xl mx-auto px-4 py-12 space-y-20" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        {/* Consent Section */}
        <section id="consent">
          <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
            Согласие на обработку персональных данных
          </h1>
          <div className="prose max-w-none text-foreground/90 leading-relaxed space-y-4" style={{ textAlign: 'justify' }}>
            <p>
              Настоящим я, субъект персональных данных, действуя свободно, своей волей и в своем интересе, даю согласие ИП Пискарева Елена Борисовна (ОГРНИП 316502700078262, ИНН 551601127545) на обработку моих персональных данных на следующих условиях:
            </p>
            <p>
              <strong>Перечень данных:</strong> ФИО, номер телефона, адрес электронной почты, а также мои изображения (фотографии и видеозаписи), полученные в ходе оказания услуг.
            </p>
            <p>
              <strong>Цели обработки:</strong> Исполнение условий договора (оферты), запись на занятия, информирование о мероприятиях, а также использование моих изображений в маркетинговых и рекламных целях хоровой студии «Громче» и образовательных проектов Оператора.
            </p>
            <p>
              <strong>Действия с данными:</strong> Сбор, запись, систематизация, накопление, хранение, уточнение, использование, обнародование и дальнейшее использование изображений (в соответствии со ст. 152.1 ГК РФ), блокирование и уничтожение.
            </p>
            <p>
              <strong>Срок действия:</strong> Согласие действует с момента его предоставления до момента его отзыва мной.
            </p>
            <p>
              <strong>Способ отзыва:</strong> Путем направления письма на электронную почту: <a href="mailto:gromche-choir@yandex.ru" className="text-primary hover:text-primary/80 transition-colors">gromche-choir@yandex.ru</a>.
            </p>
            <p>
              Я подтверждаю, что ознакомлен(а) с <a href="#policy" className="text-primary hover:text-primary/80 transition-colors">Политикой конфиденциальности</a>.
            </p>
          </div>
        </section>

        {/* Policy Section */}
        <section id="policy">
          <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
            Политика конфиденциальности
          </h1>
          <div className="prose max-w-none text-foreground/90 leading-relaxed space-y-4" style={{ textAlign: 'justify' }}>
            <p>
              [Здесь будет размещён полный текст политики конфиденциальности. Пожалуйста, предоставьте текст в следующем сообщении.]
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Legal;
