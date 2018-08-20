import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './ImportLnContactsWindow.scss';
import DropZone from '../../components/drop-zone/DropZone';
import '../../../public/images/IMG.svg';
import { constants } from '../../constants';


const ImportLnContactsWindowView = props => (
  <div className="import-lb-contacts-window">
    <section className="import-lb-contacts-window__content">
      <button className="close-btn" onClick={props.onClose} />
      <img className="import-lb-contacts-window__image" src="/images/IMG.svg" alt="in" />
      <h2 className="import-lb-contacts-window__title">Import Your <span className="marked">Linkedin</span> Contacts</h2>
      <p className="import-lb-contacts-window__sub-title">
        Start building your business network with the help of your friends
      </p>

      <div className="import-lb-contacts-window__body">
        <div className="import-lb-contacts-window__upload--wrapper">
          <div>
            <p className="import-lb-contacts-window__upload-text"><a href="https://www.linkedin.com/psettings/member-data" className="marked-underlined">Open</a>&nbsp;your Linkedin Data Archive page</p>
            <p className="import-lb-contacts-window__upload-text">Download your data</p>
            <p className="import-lb-contacts-window__upload-text">Upload your Zip file</p>
          </div>
          <DropZone />
        </div>
        <div className="import-lb-contacts-window__using-personal-info--wrapper">
          <h3 className="import-lb-contacts-window__using-personal-info__title">
            How Linkedin uses your personal information
          </h3>
          <h4>Downloading data</h4>
          <p>
            Download the archive of your account, records, publications, contacts and other information.
          </p>
          <div className="import-lb-contacts-window__using-personal-info__form--wrapper">
            <p>
              Your data in Linkedin belongs to you, and you can download the data archive at any time. Learn more
              about what data you can export by <span className="marked">going to our Help Center</span>
            </p>
            <form>
              <div className="radio--wrapper">
                <input type="radio" value="Everething" name="choose-ln-data" className="reg-radio" />
                Everething: all personal files and much more. <span className="marked">Learn More</span>
              </div>
              <div className="radio--wrapper">
                <input type="radio" value="OnChoise" name="choose-ln-data" className="reg-radio" />
                On your choise: select the data files that are most interesing for you. <span className="marked">Learn More</span>
              </div>
              <div className="checkbox-group">
                <div>
                  <input type="checkbox" id="ln-article" disabled/>
                  Articles
                </div>
                <div>
                  <input type="checkbox" id="ln-contacts" disabled checked/>
                  Contacts
                </div>
                <div>
                  <input type="checkbox" id="ln-imported-contacts" disabled/>
                  Imported contacts
                </div>
                <div>
                  <input type="checkbox" id="ln-posts"disabled />
                  Posts
                </div>
                <div>
                  <input type="checkbox" id="ln-invitations"disabled />
                  Invitations
                </div>
                <div>
                  <input type="checkbox" id="ln-profile" disabled/>
                  Profile
                </div>
                <div>
                  <input type="checkbox" id="ln-recomendations" disabled/>
                  Recomendations
                </div>
                <div>
                  <input type="checkbox" id="ln-check-in" disabled/>
                  Check in
                </div>
                <div>
                  <input type="checkbox" id="ln-multimedia" disabled/>
                  multimedia
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="import-lb-contacts-window__btns--wrapper">
        <button className="import-lb-contacts-window__cansel-btn" onClick={props.onClose}>
          Cancel
        </button>
          <Link to={constants.HOME}
                className={classNames('import-lb-contacts-window__save-btn', {'isDisabled': props.isDisabled})}
                onClick={props.onSave}>
            Save
          </Link>
      </div>
    </section>
  </div>
);

export default ImportLnContactsWindowView;
