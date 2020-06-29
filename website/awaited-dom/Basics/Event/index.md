# Event

<div class='overview'><span class="seoSummary">The <code><strong>Event</strong></code> interface represents an event which takes place in the DOM.</span></div>

<div class='overview'>An event can be triggered by the user action e.g. clicking the mouse button or tapping keyboard, or generated by APIs to represent the progress of an asynchronous task. It can also be triggered programmatically, such as by calling the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click" title="The HTMLElement.click() method simulates a mouse click&nbsp;on an element."><code>HTMLElement.click()</code></a>&nbsp;method of an&nbsp;element, or by defining&nbsp;the&nbsp;event, then sending&nbsp;it to a specified target&nbsp;using <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent" title="Dispatches an Event at the specified EventTarget, (synchronously) invoking the affected EventListeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent()."><code>EventTarget.dispatchEvent()</code></a>.</div>

<div class='overview'>There are many types of events, some of which use other interfaces based on the main <code>Event</code> interface. <code>Event</code> itself contains the properties and methods which are common to all events.</div>

<div class='overview'>Many DOM elements can be set up to accept (or "listen" for) these events, and execute code in response to process (or "handle") them. Event-handlers are usually connected (or "attached") to various <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">HTML elements</a> (such as <code>&lt;button&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, etc.) using <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" title="The EventTarget method addEventListener() sets up a function that will be&nbsp;called whenever the specified event is delivered to the target."><code>EventTarget.addEventListener()</code></a>, and this generally replaces using the old HTML <a href="https://developer.mozilla.org/en-US/docs/HTML/Global_attributes">event handler attributes</a>. Further, when properly added, such handlers can also be disconnected if needed using <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener" title="The EventTarget.removeEventListener() method removes from the&nbsp;EventTarget an event listener previously registered with EventTarget.addEventListener(). The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process; see Matching event listeners for removal"><code>removeEventListener()</code></a>.</div>

## Properties

<ul class="items properties">
  <li>
    <a href="">bubbles</a>
    <div>A boolean indicating whether or not the event bubbles up through the DOM.</div>
  </li>
  <li>
    <a href="">cancelable</a>
    <div>A boolean indicating whether the event is cancelable.</div>
  </li>
  <li>
    <a href="">cancelBubble</a>
    <div>A historical alias to <a href="/en-US/docs/Web/API/Event/stopPropagation" title="The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases."><code>Event.stopPropagation()</code></a>. Setting its value to <code>true</code> before returning from an event handler prevents propagation of the event.</div>
  </li>
  <li>
    <a href="">composed</a>
    <div>A boolean indicating whether or not the event can bubble across the boundary between the shadow DOM and the regular DOM.</div>
  </li>
  <li>
    <a href="">currentTarget</a>
    <div>A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through <em>retargeting</em>.</div>
  </li>
  <li>
    <a href="">defaultPrevented</a>
    <div>Indicates whether or not the call to <a href="/en-US/docs/Web/API/Event/preventDefault" title="The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be."><code>event.preventDefault()</code></a> canceled the event.</div>
  </li>
  <li>
    <a href="">eventPhase</a>
    <div>Indicates which phase of the event flow is being processed.</div>
  </li>
  <li>
    <a href="">isTrusted</a>
    <div>Indicates whether or not the event was initiated by the browser (after a user click, for instance) or by a script (using an event creation method, like <a href="/en-US/docs/Web/API/Event/initEvent" title="The Event.initEvent() method is used to initialize the value of an event created using Document.createEvent()."><code>Event.initEvent</code></a>).</div>
  </li>
  <li>
    <a href="">target</a>
    <div>A reference to the target to which the event was originally dispatched.</div>
  </li>
  <li>
    <a href="">timeStamp</a>
    <div>The time at which the event was created&nbsp;(in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a <a href="/en-US/docs/Web/API/DOMHighResTimeStamp" title="The DOMHighResTimeStamp type is a double and is used to store a time value in milliseconds."><code>DOMHighResTimeStamp</code></a> instead.</div>
  </li>
  <li>
    <a href="">type</a>
    <div>The name of the event. Case-insensitive.</div>
  </li>
</ul>

## Methods

<ul class="items methods">
  <li>
    <a href="">composedPath()</a>
    <div>Returns the event’s path (objects on which listeners will be invoked). This does not include nodes in shadow trees if the shadow root was created with its <a href="/en-US/docs/Web/API/ShadowRoot/mode" title="The mode property of the ShadowRoot specifies its mode — either open or closed. This defines whether or not the shadow root's internal features are accessible from JavaScript."><code>ShadowRoot.mode</code></a> closed.</div>
  </li>
  <li>
    <a href="">initEvent()</a>
    <div>Initializes the value of an Event created. If the event has already been dispatched, this method does nothing.</div>
  </li>
  <li>
    <a href="">preventDefault()</a>
    <div>Cancels the event (if it is cancelable).</div>
  </li>
  <li>
    <a href="">stopImmediatePropagation()</a>
    <div>For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).</div>
  </li>
  <li>
    <a href="">stopPropagation()</a>
    <div>Stops the propagation of events further along in the DOM.</div>
  </li>
</ul>

## Events