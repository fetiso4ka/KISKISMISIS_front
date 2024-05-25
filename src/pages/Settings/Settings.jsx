import CampaignTypeInput from "../components/CampaignTypeInput";
import "./Settings.css";

const Frame = () => {
  return (
    <div className="div">
      <header className="rectangle-parent">
        <div className="frame-child" />
        <img
          className="image-6-icon"
          loading="lazy"
          alt=""
          src="/image-6@2x.png"
        />
      </header>
      <main className="inner">
        <section className="navbar-back-button-container-parent">
          <div className="navbar-back-button-container">
            <div className="navbar-back-button-wrapper">
              <div className="navbar-back-button-content">
                <img
                  className="navbar-back-button-content-child"
                  loading="lazy"
                  alt=""
                  src="/arrow-16.svg"
                />
              </div>
              <div className="div1">Назад в календарь</div>
            </div>
          </div>
          <div className="navbar-title-container-parent">
            <div className="navbar-title-container">
              <div className="navbar-title-wrapper">
                <h3 className="h3">Настройки промо-календаря</h3>
                <div className="page-content-container-wrapper">
                  <div className="page-content-container">
                    <div className="rectangle-group">
                      <div className="frame-item" />
                      <div className="div2">1</div>
                    </div>
                    <div className="campaigns-content">
                      <div className="campaigns-instructions-content-parent">
                        <div className="campaigns-instructions-content">
                          <div className="div3">Шаг 1</div>
                          <div className="div4">
                            <p className="p">{`Заполните список промо-кампаний и укажите их приблизительную продолжительность. `}</p>
                            <p className="p1">
                              Указанные вами промо-кампании будут автоматически
                              расположены в календаре на основе наилучшего
                              совпадения
                            </p>
                            <p className="p2">
                              продолжительности промо-кампании с
                              продолжительностью роста/спада турпотока в
                              регионах.
                            </p>
                          </div>
                        </div>
                        <div className="campaigns-form">
                          <div className="campaign-type-field">
                            <div className="campaign-type-field-label">
                              <input
                                className="input"
                                placeholder="Тип промо-кампании"
                                type="text"
                              />
                              <div className="campaign-type-field-label-child" />
                            </div>
                            <CampaignTypeInput
                              line11="/line-11.svg"
                              line12="/line-12.svg"
                              line111="/line-11-1.svg"
                              line121="/line-12-1.svg"
                            />
                          </div>
                          <div className="wrapper">
                            <div className="div5">
                              Добавить еще промо-кампанию
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-container">
              <div className="frame-inner" />
              <img
                className="group-icon"
                loading="lazy"
                alt=""
                src="/group-20.svg"
              />
            </div>
            <div className="notification-settings">
              <div className="notification-settings-title">
                <div className="notification-settings-title-child" />
                <div className="notification-settings-label">2</div>
              </div>
              <div className="notification-settings-content">
                <div className="notification-time-content-parent">
                  <div className="notification-time-content">
                    <div className="div6">Шаг 2</div>
                    <div className="div7">
                      <p className="p3">
                        Настройте, за сколько времени по предполагаемого роста
                        или спада турпотока желательно начать промо-кампанию.
                      </p>
                      <p className="p4">{`Данные настройки будут учтены при автоматическом заполнении промо-календаря. `}</p>
                    </div>
                  </div>
                  <CampaignTypeInput
                    line11="/line-11-2.svg"
                    line12="/line-12-2.svg"
                    line111="/line-11-3.svg"
                    line121="/line-12-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="apply-changes-button-wrapper-wrapper">
              <button className="apply-changes-button-wrapper">
                <div className="apply-changes-button-wrapper-child" />
                <div className="div8">Применить изменения</div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Frame;