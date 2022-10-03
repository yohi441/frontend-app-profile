import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from '@edx/paragon';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import { ReactComponent as DefaultAvatar } from '../assets/avatar.svg';

import messages from './ProfileAvatar.messages';

import '../../output.css'

class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
    this.form = React.createRef();

    this.onClickUpload = this.onClickUpload.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClickUpload() {
    this.fileInput.current.click();
  }

  onClickDelete() {
    this.props.onDelete();
  }

  onChangeInput() {
    this.onSubmit();
  }

  onSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.onSave(new FormData(this.form.current));
    this.form.current.reset();
  }

  renderPending() {
    return (
      <div
        className="tw-absolute tw-h-full tw-w-full d-flex justify-content-center align-items-center rounded-circle"
        style={{ backgroundColor: 'rgba(0,0,0,.65)' }}
      >
        <div className="spinner-border tw-z-40 tw-text-primaryCrimson" role="status" />
      </div>
    );
  }

  renderMenuContent() {
    const { intl } = this.props;

    if (this.props.isDefault) {
      return (
        <Button
          
          className="tw-border-none tw-opacity-80 hover:tw-opacity-100 tw-z-50 tw-absolute hover:tw-text-white tw-bottom-0 tw-py-3 tw-pb-5 tw-text-sm tw-no-underline tw-px-8 tw-left-3 tw-text-white tw-bg-gray-500"
          onClick={this.onClickUpload}
        >
          <FormattedMessage
            id="profile.profileavatar.upload-button"
            defaultMessage="Upload Photo"
            description="Upload photo button"
          />
        </Button>
      );
    }

    return (
      <Dropdown>
        <Dropdown.Toggle className="tw-text-sm hover:tw-opacity-100 tw-z-50 tw-border-none tw-pb-6 tw-px-14 tw-absolute tw-top-32 tw-left-2 tw-opacity-70 tw-text-white tw-bg-gray-500">
          {intl.formatMessage(messages['profile.profileavatar.change-button'])}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item type="button" onClick={this.onClickUpload}>
            <FormattedMessage
              id="profile.profileavatar.upload-button"
              defaultMessage="Upload Photo"
              description="Upload photo button"
            />
          </Dropdown.Item>
          <Dropdown.Item type="button" onClick={this.onClickDelete}>
            <FormattedMessage
              id="profile.profileavatar.remove.button"
              defaultMessage="Remove"
              description="Remove photo button"
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  renderMenu() {
    if (!this.props.isEditable) {
      return null;
    }

    return (
      <div className="">
        {this.renderMenuContent()}
      </div>
    );
  }

  renderAvatar() {
    const { intl } = this.props;

    return this.props.isDefault ? (
      <DefaultAvatar className="text-muted tw-overflow-hidden" role="img" aria-hidden focusable="false" viewBox="0 0 24 24" />
    ) : (
      <img
        data-hj-suppress
        className="overflow-hidden tw-w-full tw-h-full tw-shadow-all d-block rounded-circle"
        style={{ objectFit: 'cover' }}
        alt={intl.formatMessage(messages['profile.image.alt.attribute'])}
        src={this.props.src}
      />
    );
  }

  render() {
    return (
      <div className="">
        <div className="tw-absolute tw-inset-0">
          {this.props.savePhotoState === 'pending' ? this.renderPending() : this.renderMenu() }
          {this.renderAvatar()}
        </div>
        <form
          ref={this.form}
          onSubmit={this.onSubmit}
          encType="multipart/form-data"
        >
          {/* The name of this input must be 'file' */}
          <input
            className="tw-hidden tw-opacity-0 tw-z-30 tw-absolute tw-bottom-0 tw-left-7"
            ref={this.fileInput}
            type="file"
            name="file"
            id="photo-file"
            onChange={this.onChangeInput}
            accept=".jpg, .jpeg, .png"
          />
        </form>
      </div>
    );
  }
}

export default injectIntl(ProfileAvatar);

ProfileAvatar.propTypes = {
  src: PropTypes.string,
  isDefault: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  savePhotoState: PropTypes.oneOf([null, 'pending', 'complete', 'error']),
  isEditable: PropTypes.bool,
  intl: intlShape.isRequired,
};

ProfileAvatar.defaultProps = {
  src: null,
  isDefault: true,
  savePhotoState: null,
  isEditable: false,
};
