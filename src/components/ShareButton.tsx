import type { Component } from "solid-js";

interface Props {
    /**
     * The text to share.
     */
    text: string;
    /**
     * The URL to share.
     */
    url: string;
}

/**
 * Represents a share button component.
 * @param props - The properties for the component.
 * @returns
 */
const ShareButton: Component<Props> = (props) => {
    // Share Handler
    const share = () => {
        navigator.share({
            text: props.text,
            url: props.url,
        });
    };

    return (
        <button type="button" class="flex cursor-pointer gap-2" onClick={share}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
            <span class="hidden font-semibold lg:inline">Share</span>
        </button>
    );
};

export default ShareButton;
