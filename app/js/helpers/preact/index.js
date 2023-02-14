
import { h, createElement, render } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

import { useEffect, useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';

const html = htm.bind(h);

export {
	createElement,
	render,
	html,
	useEffect,
	useState
};
