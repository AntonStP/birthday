/* eslint-disable */
// import $ from 'jquery';
import isMobile from 'ismobilejs';

export function mobileLinksManager(){
	if (isMobile.any){
		const managedElements = $("[data-mhref]");
		for (let i = 0; i < managedElements.length; i++){
			const $element = $(managedElements[i]);
			$element.attr("href", $element.attr("data-mhref"));
		}
	}
}
