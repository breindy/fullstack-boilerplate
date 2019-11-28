import React, { Component } from 'react';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import { Link } from 'react-router-dom';
import 'react-popupbox/dist/react-popupbox.css';

class Modal extends Component {
	componentDidMount() {
		this.openPopupbox();
	}

	openPopupbox() {
		const content = (
			<div>
				<img src={this.props.image} width={this.props.width} alt="" />
				<br />
				<br />
				<h3 className="text-success">{this.props.title}</h3>
				<p className="body">{this.props.content}</p>
				<p className="additionalBody">{this.props.additional} </p>
				<Link to={this.props.page}>
					<button type="button" className="btn btn-primary">
						{this.props.cta}
					</button>
				</Link>
			</div>
		);
		PopupboxManager.open({ content });
	}
	state = {};
	render() {
		const popupboxConfig = {
			fadeIn: true,
			fadeInSpeed: 200
		};
		return (
			<div>
				<PopupboxContainer {...popupboxConfig} />
			</div>
		);
	}
}

export default Modal;
