'use strict';

import core from 'metal';
import templates from './Code.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {dom} from 'metal-dom';

class Code extends Component {

	created() {
		CodeMirror.defaults.lineNumbers = true;
		CodeMirror.defaults.matchBrackets = true;
		CodeMirror.defaults.viewportMargin = Infinity;
		CodeMirror.defaults.readOnly = true;
	}

	handleTabClick(event) {
		var element = event.target;
		var index = parseInt(element.dataset.index, 10);
		if(this.prevIndex !== index) {
			this.plotCode(this.tabContainers[index]);
			this.prevIndex = index;
		}
	}

	initTabs(container) {
		this.tabs_ = [];
		for (var i = 0; i < this.tabContainers.length; i++) {
			if(this.tabContainers[i].dataset.title) {
				this.tabs_.push(this.tabContainers[i].dataset.title);
			}
		}
		setTimeout(() => {
			this.plotCode(this.tabContainers[0]);
		}, 100);
	}

	plotCode(tabContent) {
		this.content_ = tabContent.outerHTML;
		this.content_ = this.content_;
		this.toCodemirror(this.element.querySelector('.code'));
	}

	syncContainer(value) {
		this.tabContainers = value.querySelectorAll('.code');
		this.initTabs(value);
	}

	syncTheme(value) {
		CodeMirror.defaults.theme = value;
	}

	toCodemirror(target) {
		CodeMirror.fromTextArea(target, {
			mode: target.dataset.mode ? 'text/' + target.dataset.mode : ''
		});
	}

}

Soy.register(Code, templates);

Code.STATE = {
	container: {},
	content_: {
		internal: true
	},
	prevIndex: {
		internal: true,
		value: 0
	},
	tabContainers: {
		internal: true
	},
	tabs_: {
		internal: true
	},
	theme: {}
};

Code.SYNC_UPDATES = true;

export default Code;
