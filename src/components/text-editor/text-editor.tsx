import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'text-editor',
  styleUrls: [
    'text-editor.css',
  ],
  shadow: false,
})
export class TextEditor {
  @Element() el: HTMLElement;

  render() {
    return (
      <Host>
        <quill-editor theme="snow"></quill-editor>
      </Host>
    );
  }
}
