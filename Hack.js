javascript:(function () {
    
    // Create and append the main stylesheet
    const style = document.createElement('style');
    style.textContent = `
      /* Global Resets and Font */
      body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background-color: black;
          color: #c084fc;
          overflow: hidden; /* Prevent scrollbars on body during full-screen overlays */
      }
  
      /* Global Animations */
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
      @keyframes glow {
        0%, 100% { text-shadow: 0 0 5px #c084fc, 0 0 10px #c084fc; }
        50% { text-shadow: 0 0 15px #a855f7, 0 0 25px #a855f7; }
      }
      @keyframes blueGlow { /* This animation is no longer directly used but kept for completeness if needed elsewhere */
        0%, 100% { text-shadow: 0 0 5px #007bff, 0 0 10px #007bff; }
        50% { text-shadow: 0 0 15px #3399ff, 0 0 25px #3399ff; }
      }
  
      /* General Button Styling */
      .btn {
        background: linear-gradient(135deg, #9333ea, #7c3aed, #5b21b6);
        color: black;
        font-family: 'Monospace', monospace;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 20px;
        transition: background 0.3s, box-shadow 0.3s, transform 0.1s;
        box-shadow: 0 0 10px #c084fc, 0 0 5px #c084fc inset;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        padding: 10px 20px;
        font-size: 16px;
        user-select: none;
      }
      .btn:hover {
        background: linear-gradient(135deg, #a855f7, #8b5cf6, #6d28d9);
        box-shadow: 0 0 15px #a855f7, 0 0 8px #a855f7 inset;
      }
      .btn:active {
          transform: scale(0.98);
      }
      .btn:disabled {
        background: linear-gradient(135deg, #1e1b4b, #312e81, #1e1b4b);
        box-shadow: 0 0 5px #312e81;
        cursor: not-allowed;
        color: #aaaaaa;
      }
      .glow {
        animation: glow 1.5s infinite alternate;
      }
  
      /* Specific style for buttons on the second launch screen */
      .launch-screen-btn {
        font-size: 18px;
        padding: 12px 25px;
        width: auto;
        min-width: 150px;
        box-sizing: border-box;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
  
      /* Class for wide buttons (like Activate System) */
      .btn-wide {
        width: 100%;
        box-sizing: border-box;
        font-size: 18px;
        padding: 12px 20px;
      }
  
      /* Toggle Switch Container */
      .toggleContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        font-family: 'Monospace', monospace;
        color: #c084fc;
        font-size: 16px;
        user-select: none;
        opacity: 1;
        transition: opacity 0.3s;
      }
      .toggleContainer.disabled {
        opacity: 0.5;
        pointer-events: none;
      }
      .toggleContainer label:first-child {
          flex-grow: 1;
          margin-right: 10px;
      }
  
      /* Toggle Switch Styling */
      .switch {
        position: relative;
        display: inline-block;
        width: 50px; height: 26px;
        vertical-align: middle;
        flex-shrink: 0;
      }
      .switch input { opacity: 0; width: 0; height: 0; position: absolute; }
      .slider {
        position: absolute; cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: #1e1b4b;
        border: 2px solid #c084fc;
        border-radius: 13px;
        box-shadow: inset 0 0 8px #312e81cc;
        transition: background-color 0.4s, box-shadow 0.4s, border-color 0.4s;
      }
      .slider:before {
        position: absolute; content: "";
        height: 18px; width: 18px;
        left: 3px; bottom: 2px;
        background-color: #c084fc;
        border-radius: 50%;
        box-shadow: 0 0 8px #c084fc;
        transition: transform 0.4s, background-color 0.4s, box-shadow 0.4s;
      }
      input:checked + .slider {
        background: linear-gradient(135deg, #9333ea, #7c3aed);
        box-shadow: 0 0 15px #c084fc;
        border-color: #a855f7;
      }
      input:checked + .slider:before {
        transform: translateX(24px);
        background-color: #f3e8ff;
        box-shadow: 0 0 10px #a855f7;
      }
  
      /* GUI Title (Main Exploit Interface) */
      .guiTitle {
        font-family: 'Papyrus', 'Comic Sans MS', cursive, sans-serif;
        font-size: 22px; text-align: center; color: #c084fc;
        margin-bottom: 5px; user-select: none;
        animation: glow 1.5s infinite alternate;
        text-shadow: 0 0 5px #c084fc, 0 0 10px #c084fc, 0 0 15px #c084fc;
      }
      .developerInfo {
        font-family: 'Monospace', monospace; font-size: 11px;
        text-align: center; color: #a855f7;
        margin-top: 0px; margin-bottom: 10px; user-select: none;
      }
      .enterUserLabel {
        font-family: 'Monospace', monospace; color: #c084fc;
        font-size: 16px; margin-bottom: 8px;
        user-select: none; opacity: 1; transition: opacity 0.3s;
      }
      .enterUserLabel.disabled { opacity: 0.5; }
  
      /* Main GUI Container (Exploit Interface) */
      /* This section is largely kept for styling, but the GUI won't be created */
      #gui {
        position: fixed; top: 50px; left: 50px;
        width: 360px;
        background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(5px);
        color: #c084fc; border: 2px solid #c084fc; border-radius: 12px;
        z-index: 9999; font-family: 'Monospace', monospace;
        padding: 0; box-shadow: 0 0 25px #c084fc, 0 0 10px black inset;
        animation: fadeIn 0.7s ease-out; user-select: none;
        resize: both; overflow: hidden;
        min-width: 300px; min-height: 200px;
        cursor: default; display: flex; flex-direction: column;
      }
      #gui.disabled-drag { cursor: not-allowed; }
      #guiContent {
          padding: 15px 20px 20px 20px;
          overflow-y: auto; flex-grow: 1;
          display: flex; flex-direction: column;
      }
      #titleBar {
        cursor: move; 
        background: linear-gradient(135deg, rgba(59, 7, 100, 0.7), rgba(49, 46, 129, 0.7));
        padding: 8px 12px; font-weight: bold; color: #c084fc;
        position: relative; border-radius: 10px 10px 0 0;
        font-family: 'Papyrus', 'Comic Sans MS', cursive, sans-serif;
        font-size: 18px; text-align: center; user-select: none;
        padding-right: 60px; flex-shrink: 0;
        border-bottom: 1px solid rgba(192,132,252,0.5);
      }
      #gui.disabled-drag #titleBar { cursor: not-allowed; }
      #closeBtn, #minimizeBtn {
        position: absolute; top: 50%; transform: translateY(-50%);
        color: #c084fc; font-weight: bold; font-size: 18px;
        cursor: pointer; user-select: none;
        transition: color 0.3s, transform 0.2s;
        padding: 2px 6px; border-radius: 4px;
      }
      #closeBtn { right: 8px; }
      #minimizeBtn { right: 35px; }
      #closeBtn:hover, #minimizeBtn:hover {
        color: #a855f7; transform: translateY(-50%) scale(1.1);
      }
  
      /* Full Screen Overlay Styles (used by secondLaunchScreen, initialLoadingScreen) */
      .full-screen-overlay, #loadingScreen {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(135deg, rgba(0,0,0,0.95), rgba(30,27,75,0.98), rgba(0,0,0,0.95));
        color: #c084fc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Monospace', monospace;
        z-index: 100000;
        animation: fadeIn 0.5s ease-in-out;
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
      }
  
      /* Styles for Initial Purple Loading Screen */
      #loadingPercent {
        margin-bottom: 15px;
        font-size: 18px;
        user-select: none;
      }
      #progressBar {
        width: 80%;
        max-width: 500px;
        height: 22px;
        border: 2px solid #c084fc;
        box-shadow: 0 0 10px #c084fc, inset 0 0 5px rgba(192,132,252,0.4);
        border-radius: 11px;
        overflow: hidden;
        background-color: rgba(30,27,75,0.5);
      }
      #progressInner {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #a855f7, #9333ea, #7c3aed);
        transition: width 0.1s linear;
        border-radius: 8px 0 0 8px;
        box-shadow: 0 0 8px #a855f7;
      }
      #progressInner.full { border-radius: 8px; }
  
      /* Second Launch Screen Specifics */
      #launchLogo { /* Used on secondLaunchScreen */
        width: clamp(180px, 30vw, 250px);
        height: auto;
        margin-bottom: 30px;
        animation: glow 1.5s infinite alternate;
        filter: drop-shadow(0 0 15px #c084fc);
      }
      #blooketScriptTitle {
        font-family: 'Papyrus', 'Comic Sans MS', cursive, sans-serif;
        font-size: clamp(28px, 5vw, 40px); color: #c084fc;
        margin-bottom: 25px; user-select: none;
        animation: glow 1.8s infinite alternate;
        text-shadow: 0 0 8px #c084fc, 0 0 15px #c084fc, 0 0 20px #c084fc;
      }
  
      /* General Input Styling (main GUI) */
      #guiContent input[type="text"] {
        width: 100%; background: rgba(0,0,0,0.7); color: #c084fc;
        border: 1.5px solid #c084fc; border-radius: 6px;
        padding: 10px 12px; font-family: 'Monospace', monospace;
        font-size: 15px; outline: none;
        box-shadow: 0 0 8px #c084fc inset, 0 0 5px rgba(0,0,0,0.5);
        transition: border-color 0.3s, box-shadow 0.3s, opacity 0.3s;
        box-sizing: border-box; margin-bottom: 20px;
      }
      #guiContent input[type="text"]:focus {
        border-color: #a855f7;
        box-shadow: 0 0 12px #a855f7 inset, 0 0 8px #a855f7;
      }
      #guiContent input[type="text"]:disabled {
        opacity: 0.4; cursor: not-allowed; background: rgba(30,27,75,0.5);
      }
  
      /* NEW: Close Confirmation Dialog Styles */
      #closeConfirmationDialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        background: linear-gradient(135deg, rgba(30, 27, 75, 0.95), rgba(59, 7, 100, 0.95));
        backdrop-filter: blur(4px);
        color: #e9d5ff; /* Lighter purple for text */
        border: 2px solid #c084fc;
        border-radius: 10px;
        z-index: 100002; /* Above tinyLoadingGUI if it were somehow present */
        font-family: 'Monospace', monospace;
        padding: 25px;
        box-shadow: 0 0 20px #c084fc, 0 0 10px #312e81 inset;
        animation: fadeIn 0.3s ease-out;
        user-select: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      #confirmationMessage {
        font-size: 16px;
        margin-bottom: 20px;
        line-height: 1.5;
      }
      #confirmationButtonsContainer {
        display: flex;
        justify-content: space-around; /* Or space-between */
        width: 100%;
      }
      #confirmationButtonsContainer .btn { /* Style buttons within confirmation */
        margin-top: 0; /* Remove default top margin for these specific buttons */
        padding: 8px 18px;
        font-size: 14px;
        min-width: 80px;
      }
      /* End of NEW Styles */
    `;
    document.head.appendChild(style);
  
    // --- Helper function to create DOM elements ---
    function createElement(tag, properties = {}, children = []) {
      const element = document.createElement(tag);
      Object.keys(properties).forEach(key => {
          if (key === 'style' && typeof properties[key] === 'object') {
              Object.assign(element.style, properties[key]);
          } else if (key === 'className') {
              element.className = properties[key];
          } else if (key === 'textContent' || key === 'innerHTML') {
              element[key] = properties[key];
          } else if (key === 'onclick') {
              if (properties[key]) {
                element.addEventListener('click', properties[key]);
              }
          } else {
              element.setAttribute(key, properties[key]);
          }
      });
      children.forEach(child => {
          if (child) element.appendChild(child);
      });
      return element;
    }
  
    // --- FadeOut and Remove Utility ---
    function fadeOutAndRemove(element, callback) {
        if (!element || !element.parentNode) {
            if (callback) callback();
            return;
        }
        element.style.animation = 'fadeOut 0.5s ease-out forwards';
        element.addEventListener('animationend', () => {
            if (element.parentNode) {
                element.remove();
            }
            if (callback) callback();
        }, { once: true });
    }
  
    // --- Initial Purple Loading Screen (0-100%) ---
    function showInitialRedLoadingScreen() {
      const progressInner = createElement('div', { id: 'progressInner' });
      const progressBar = createElement('div', { id: 'progressBar' }, [progressInner]);
      const percentText = createElement('div', { id: 'loadingPercent', textContent: 'Initializing System... 0%' });
      const loadingScreen = createElement('div', { id: 'loadingScreen' }, [percentText, progressBar]);
      document.body.appendChild(loadingScreen);
  
      let percent = 0;
      const interval = setInterval(() => {
        percent++;
        progressInner.style.width = percent + '%';
        if (percent === 100) progressInner.classList.add('full');
        percentText.textContent = 'Initializing System... ' + percent + '%';
        if (percent >= 100) {
          clearInterval(interval);
          fadeOutAndRemove(loadingScreen, showSecondLaunchScreen);
        }
      }, 20);
    }
  
    // --- Second Launch Screen (Blooket Script Title, Logo, Launch Button) ---
    function showSecondLaunchScreen() {
        const blooketScriptTitle = createElement('h1', {
            id: 'blooketScriptTitle',
            textContent: 'Blooket Script'
        });
        // Removed the logo element creation
        const launchBtn = createElement('button', {
            id: 'secondLaunchButton',
            className: 'btn glow launch-screen-btn',
            textContent: 'Launch Interface',
            onclick: () => {
                const screen = document.getElementById('secondLaunchScreen');
                // Instead of calling createGUI, we just remove the launch screen.
                // No new UI will be created.
                fadeOutAndRemove(screen, () => {
                    console.log("Launch interface clicked. No UI will be displayed.");
                    // You can add any other actions here if needed,
                    // like executing the actual script logic.
                });
            }
        });
        const secondLaunchScreen = createElement('div', {
            id: 'secondLaunchScreen',
            className: 'full-screen-overlay'
        }, [blooketScriptTitle, launchBtn]); // 'logo' has been removed from this array
        document.body.appendChild(secondLaunchScreen);
    }
  
    // --- NEW: Close Confirmation Dialog Function (No longer directly used if GUI isn't created, but kept for completeness) ---
    function showCloseConfirmationDialog() {
        if (document.getElementById('closeConfirmationDialog')) return;
  
        const message = createElement('div', {
            id: 'confirmationMessage',
            textContent: 'Are you sure you want to close the UI?'
        });
  
        const yesBtn = createElement('button', {
            className: 'btn',
            textContent: 'Yes',
            onclick: () => {
                const dialog = document.getElementById('closeConfirmationDialog');
                if (dialog) fadeOutAndRemove(dialog);
                // If GUI was active, this would fade it out.
                // Since GUI isn't being created, this path won't be hit unless 'guiInstance' somehow exists.
                if (guiInstance && guiInstance.parentNode) {
                    fadeOutAndRemove(guiInstance);
                }
            }
        });
  
        const noBtn = createElement('button', {
            className: 'btn',
            textContent: 'No',
            onclick: () => {
                const dialog = document.getElementById('closeConfirmationDialog');
                if (dialog) fadeOutAndRemove(dialog);
            }
        });
  
        const buttonsContainer = createElement('div', { id: 'confirmationButtonsContainer' }, [yesBtn, noBtn]);
  
        const dialog = createElement('div', {
            id: 'closeConfirmationDialog'
        }, [message, buttonsContainer]);
  
        document.body.appendChild(dialog);
    }
  
    // --- Main GUI Creation (Removed from flow) ---
    // These variables are kept for consistency with the CSS but the function `createGUI`
    // will not be called, so the GUI will not be added to the DOM.
    let guiInstance = null;
    let titleBarInstance = null;
    let guiContentInstance = null;
  
    function createGUI() {
      // This function will no longer be called after "Launch Interface" button click.
      // Its contents are effectively dormant in this version.
      console.warn("createGUI() was called, but UI creation is disabled. No GUI will appear.");
  
      // The rest of the createGUI function's logic remains here,
      // but it won't execute unless explicitly called again.
      if (document.getElementById('gui')) return;
      const developerInfo = createElement('div', { className: 'developerInfo', textContent: 'Developed by MAJESTIC_HUB' });
      const enterUserLabel = createElement('div', { className: 'enterUserLabel disabled', textContent: 'Enter your user:' });
      const userInput = createElement('input', { type: 'text', placeholder: 'Your username...', disabled: true });
  
      function createToggleLine(labelText, idSuffix) {
        const checkbox = createElement('input', { type: 'checkbox', disabled: true, id: `toggle-${idSuffix}` });
        const slider = createElement('span', { className: 'slider' });
        const switchLabelElement = createElement('label', { className: 'switch', for: `toggle-${idSuffix}` }, [checkbox, slider]);
        const textLabel = createElement('label', { textContent: labelText, for: `toggle-${idSuffix}` });
        const container = createElement('div', { className: 'toggleContainer disabled' }, [textLabel, switchLabelElement]);
        return { container, checkbox, textLabel };
      }
  
      const tokensDupeToggle = createToggleLine('Tokens Dupe', 'tokens');
      const antiBanToggle = createToggleLine('Anti Ban', 'antiban');
      const adminToggle = createToggleLine('Admin Privilege', 'admin');
      const getAllToggle = createToggleLine('Get all Blooks', 'getall');
      const stealToggle = createToggleLine('Steal Players Blooks', 'steal');
      const startHackBtn = createElement('button', {
          className: 'btn btn-wide glow',
          textContent: 'Activate System',
          onclick: handleStartHack
      });
  
      guiContentInstance = createElement('div', { id: 'guiContent'}, [
          developerInfo, enterUserLabel, userInput,
          tokensDupeToggle.container, antiBanToggle.container, adminToggle.container,
          getAllToggle.container, stealToggle.container, startHackBtn
      ]);
  
      const minimizeBtn = createElement('div', {
          id: 'minimizeBtn', textContent: '−', title: 'Minimize', onclick: handleMinimizeToggle
      });
      const closeBtn = createElement('div', {
          id: 'closeBtn', textContent: 'X', title: 'Close',
          onclick: showCloseConfirmationDialog
      });
  
      titleBarInstance = createElement('div', { id: 'titleBar', textContent: '𓂀 Blooket Xploit Interface 𓂀' }, [minimizeBtn, closeBtn]);
      guiInstance = createElement('div', { id: 'gui', className: 'disabled-drag' }, [titleBarInstance, guiContentInstance]);
      document.body.appendChild(guiInstance);
  
      const interactiveElements = {
        userInput: userInput, userInputLabel: enterUserLabel,
        toggles: [tokensDupeToggle, antiBanToggle, adminToggle, getAllToggle, stealToggle],
        startHackBtn: startHackBtn,
      };
  
      function handleStartHack() {
        userInput.disabled = false;
        enterUserLabel.classList.remove('disabled');
        interactiveElements.toggles.forEach(toggle => {
          toggle.checkbox.disabled = false;
          toggle.container.classList.remove('disabled');
          toggle.textLabel.classList.remove('disabled');
        });
        if (guiInstance) guiInstance.classList.remove('disabled-drag');
        if (titleBarInstance && guiInstance) makeDraggable(guiInstance, titleBarInstance);
        if (startHackBtn.parentNode) startHackBtn.remove();
      }
  
      let isMinimized = false;
      const initialGuiMinHeight = guiInstance ? (guiInstance.style.minHeight || '200px') : '200px';
      function handleMinimizeToggle() {
        isMinimized = !isMinimized;
        if (!guiInstance || !guiContentInstance || !titleBarInstance) return;
        if (isMinimized) {
          guiContentInstance.style.display = 'none';
          guiInstance.style.height = titleBarInstance.offsetHeight + 'px';
          guiInstance.style.minHeight = titleBarInstance.offsetHeight + 'px';
          guiInstance.style.resize = 'horizontal';
          minimizeBtn.textContent = '□'; minimizeBtn.title = 'Restore';
        } else {
          guiContentInstance.style.display = 'flex';
          guiInstance.style.height = '';
          guiInstance.style.minHeight = initialGuiMinHeight;
          guiInstance.style.resize = 'both';
          minimizeBtn.textContent = '−'; minimizeBtn.title = 'Minimize';
        }
      }
  
      userInput.addEventListener('focus', () => { if (!userInput.disabled) userInput.style.borderColor = '#d8b4fe'; });
      userInput.addEventListener('blur', () => { if (!userInput.disabled) userInput.style.borderColor = '#c084fc'; });
      interactiveElements.toggles.forEach(toggle => {
          toggle.checkbox.addEventListener('change', () => {
              console.log(toggle.textLabel.textContent + " is " + (toggle.checkbox.checked ? "ON" : "OFF"));
          });
      });
    }
  
    // --- Draggable GUI Logic (No longer directly used for a GUI, but kept) ---
    function makeDraggable(element, handle) {
      if (!element || !handle) return;
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      handle.onmousedown = dragMouseDown;
      function dragMouseDown(e) {
        if (element.classList.contains('disabled-drag')) return;
        if (e.target.id === 'minimizeBtn' || e.target.id === 'closeBtn') return;
        if (e.target.closest && e.target.closest('#closeConfirmationDialog')) return;
  
        e.preventDefault();
        pos3 = e.clientX; pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        handle.style.cursor = 'grabbing';
      }
      function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY;
        pos3 = e.clientX; pos4 = e.clientY;
        const newTop = Math.max(0, Math.min(element.offsetTop - pos2, window.innerHeight - element.offsetHeight));
        const newLeft = Math.max(0, Math.min(element.offsetLeft - pos1, window.innerWidth - element.offsetWidth));
        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";
      }
      function closeDragElement() {
        document.onmouseup = null; document.onmousemove = null;
        if (handle) handle.style.cursor = 'move';
      }
    }
  
    // --- Start the sequence ---
    showInitialRedLoadingScreen();
  
  })();

// Security Protection Screen JavaScript Code

function createSecurityScreen() {
    // Create CSS styles
    const styles = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .security-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: #000;
                color: white;
                font-family: 'Courier New', monospace;
                z-index: 999999;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
            }

            .security-header {
                position: absolute;
                top: 30px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 36px;
                font-weight: bold;
                letter-spacing: 2px;
                color: #ff4444;
                text-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
            }

            .gear-icon {
                display: inline-block;
                animation: rotateGear 2s linear infinite;
            }

            .lock-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .lock {
                width: 100px;
                height: 120px;
                position: relative;
                animation: lockPulse 2s infinite ease-in-out;
            }

            .lock-body {
                width: 100px;
                height: 70px;
                background: linear-gradient(145deg, #333, #111);
                border-radius: 10px;
                position: absolute;
                bottom: 0;
                border: 3px solid #666;
                box-shadow: 0 0 20px rgba(255, 68, 68, 0.3);
            }

            .lock-shackle {
                width: 60px;
                height: 60px;
                border: 8px solid #666;
                border-radius: 50px 50px 0 0;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                border-bottom: none;
                background: transparent;
                animation: shackleShake 3s infinite ease-in-out;
            }

            .keyhole {
                width: 12px;
                height: 12px;
                background: #000;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .keyhole::after {
                content: '';
                width: 4px;
                height: 15px;
                background: #000;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
            }

            .security-text {
                color: #ff4444;
                font-size: 18px;
                margin-top: 30px;
                text-align: center;
                text-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
            }
            
            .proceed-button {
                background: #ff4444;
                color: white;
                border: 2px solid #ff4444;
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                border-radius: 5px;
                position: absolute;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1000000;
                transition: background-color 0.3s ease;
            }
            
            .proceed-button:hover {
                background-color: #e03b3b;
            }
            
            .warning-lights {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                animation: warningFlash 1.5s infinite ease-in-out;
            }

            @keyframes rotateGear {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            @keyframes lockPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }

            @keyframes shackleShake {
                0%, 100% { transform: translateX(-50%) rotate(0deg); }
                10% { transform: translateX(-50%) rotate(-2deg); }
                20% { transform: translateX(-50%) rotate(2deg); }
                30% { transform: translateX(-50%) rotate(-1deg); }
                40% { transform: translateX(-50%) rotate(1deg); }
                50% { transform: translateX(-50%) rotate(0deg); }
            }

            @keyframes warningFlash {
                0%, 100% { 
                    box-shadow: inset 0 0 50px rgba(255, 68, 68, 0.1);
                }
                50% { 
                    box-shadow: inset 0 0 50px rgba(255, 68, 68, 0.3);
                }
            }

            @keyframes fadeOut {
                0% { 
                    opacity: 1; 
                    visibility: visible;
                }
                100% { 
                    opacity: 0; 
                    visibility: hidden;
                }
            }

            .fade-out {
                animation: fadeOut 1s ease-out forwards;
            }
        </style>
    `;

    // Add styles to head
    document.head.insertAdjacentHTML('beforeend', styles);

    // Create the security overlay HTML
    const securityHTML = `
        <div class="security-overlay" id="securityOverlay">
            <div class="warning-lights"></div>
            
            <div class="security-header">
                <span class="gear-icon">⚙️</span> Security Protection Enforced
            </div>

            <div class="lock-container">
                <div class="lock">
                    <div class="lock-shackle"></div>
                    <div class="lock-body">
                        <div class="keyhole"></div>
                    </div>
                </div>
                <div class="security-text">
                    SYSTEM LOCKED<br>
                    ACCESS DENIED
                </div>
            </div>

            <button id="proceedButton" class="proceed-button">Proceed</button>
        </div>
    `;

    // Add the overlay to the body
    document.body.insertAdjacentHTML('beforeend', securityHTML);

    const overlay = document.getElementById('securityOverlay');
    const proceedButton = document.getElementById('proceedButton');

    // Remove the screen when the button is clicked
    proceedButton.addEventListener('click', () => {
        overlay.classList.add('fade-out');
        
        // Completely remove after fade animation
        setTimeout(() => {
            overlay.remove();
            // Remove event listeners
            document.removeEventListener('contextmenu', preventRightClick);
            document.removeEventListener('keydown', preventKeyShortcuts);
        }, 1000);
    });

    // Prevent interactions
    const preventRightClick = (e) => e.preventDefault();
    const preventKeyShortcuts = (e) => {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||
            (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
        }
    };

    document.addEventListener('contextmenu', preventRightClick);
    document.addEventListener('keydown', preventKeyShortcuts);
}

// Call the function to activate security screen
createSecurityScreen();

// This script creates a custom two-step "Key System" UI on the current web page.
// It uses custom UI elements instead of built-in browser prompts to ensure it
// loads and runs reliably without being blocked.
// To use, copy and paste this entire code into your browser's developer console.

// --- Main script logic ---
(function() {
    // Prevent the script from running if the UI already exists
    if (document.getElementById('key-system-container')) {
        console.warn('The Key System UI is already active.');
        return;
    }

    // Save the original page title to restore it later
    const originalTitle = document.title;
    document.title = 'Enforced Protection Key System: Activated';

    // The correct admin password
    const CORRECT_PASSWORD = 'Admin';

    // Function to remove all created elements and restore the page
    function removeUI() {
        const uiContainer = document.getElementById('key-system-container');
        if (uiContainer) {
            uiContainer.remove();
        }
        // Restore the original title
        document.title = originalTitle;
    }

    // --- Create the custom password UI ---
    function createPasswordUI() {
        const passwordContainer = document.createElement('div');
        passwordContainer.id = 'key-system-container';
        passwordContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #a770ef, #cf6eab);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

        const passwordBox = document.createElement('div');
        passwordBox.style.cssText = `
            background-color: white;
            border: 2px solid black;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            max-width: 350px;
            font-family: Arial, sans-serif;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            user-select: none;
        `;

        const passwordTitle = document.createElement('h1');
        passwordTitle.textContent = 'Enter Admin Password';
        passwordTitle.style.cssText = `
            font-size: 24px;
            margin-top: 0;
            margin-bottom: 15px;
        `;

        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.placeholder = 'Password...';
        passwordInput.style.cssText = `
            width: 90%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
            text-align: center;
            margin-bottom: 15px;
        `;

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.style.cssText = `
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: 1px solid black;
            border-radius: 5px;
            background-color: #f0f0f0;
        `;

        const messageDisplay = document.createElement('p');
        messageDisplay.style.cssText = `
            font-size: 14px;
            color: red;
            height: 20px;
            margin-top: 15px;
            font-weight: bold;
        `;

        submitButton.addEventListener('click', () => {
            if (passwordInput.value === CORRECT_PASSWORD) {
                // Correct password, remove this UI and create the next one
                passwordContainer.remove();
                createKeySystemUI();
            } else {
                messageDisplay.textContent = 'Incorrect password.';
            }
        });

        passwordBox.appendChild(passwordTitle);
        passwordBox.appendChild(passwordInput);
        passwordBox.appendChild(submitButton);
        passwordBox.appendChild(messageDisplay);
        passwordContainer.appendChild(passwordBox);
        document.body.appendChild(passwordContainer);
        passwordInput.focus();
    }

    // --- Create the main key system UI ---
    function createKeySystemUI() {
        // Generate a unique, one-time key for this session
        const CORRECT_KEY = `FREE_${crypto.randomUUID().replace(/-/g, '')}`;

        const overlay = document.createElement('div');
        overlay.id = 'key-system-container';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #a770ef, #cf6eab);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

        const uiBox = document.createElement('div');
        uiBox.id = 'key-system-box';
        uiBox.style.cssText = `
            background-color: white;
            border: 2px solid black;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            max-width: 350px;
            font-family: Arial, sans-serif;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `;

        const uiTitle = document.createElement('h1');
        uiTitle.id = 'key-system-title';
        uiTitle.textContent = 'Key System';
        uiTitle.style.cssText = `
            font-size: 24px;
            margin-top: 0;
            margin-bottom: 10px;
        `;

        const uiDescription = document.createElement('p');
        uiDescription.textContent = 'Receive Code From Admin';
        uiDescription.style.cssText = `
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
        `;
        
        const keyMessageContainer = document.createElement('div');
        keyMessageContainer.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
        `;

        const keyMessage = document.createElement('p');
        keyMessage.id = 'key-message';
        keyMessage.textContent = CORRECT_KEY;
        keyMessage.style.cssText = `
            font-size: 14px;
            color: #000;
            word-break: break-all;
            background-color: #f0f0f0;
            padding: 5px;
            border-radius: 5px;
            margin: 0;
        `;
        
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.style.cssText = `
            padding: 5px 10px;
            font-size: 14px;
            cursor: pointer;
            border: 1px solid black;
            border-radius: 5px;
            background-color: #f0f0f0;
        `;

        copyButton.addEventListener('click', () => {
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = CORRECT_KEY;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);

            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy';
            }, 1000);
        });
        
        keyMessageContainer.appendChild(keyMessage);
        keyMessageContainer.appendChild(copyButton);

        const inputField = document.createElement('input');
        inputField.id = 'key-system-input';
        inputField.type = 'text';
        inputField.placeholder = 'Enter key...';
        inputField.style.cssText = `
            width: 90%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
            text-align: center;
        `;

        const messageDisplay = document.createElement('p');
        messageDisplay.id = 'key-system-message';
        messageDisplay.style.cssText = `
            font-size: 16px;
            color: red;
            height: 20px;
            margin-top: 15px;
            font-weight: bold;
        `;

        inputField.addEventListener('keyup', (e) => {
            const enteredKey = e.target.value.trim();

            if (enteredKey === CORRECT_KEY) {
                // Correct key entered: show new message and move to next UI
                uiBox.innerHTML = '';
                const gearIcon = document.createElement('span');
                gearIcon.innerHTML = '⚙️';
                gearIcon.style.cssText = `
                    display: inline-block;
                    animation: spin 1s linear infinite;
                    margin-right: 10px;
                `;
                messageDisplay.textContent = 'Manual Verification Required';
                messageDisplay.style.color = 'green';
                messageDisplay.prepend(gearIcon);
                
                // Add the spin animation
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);

                setTimeout(() => {
                    // This is where the second UI is created
                    createVerificationUI(overlay);
                }, 1500);
            } else if (enteredKey !== '') {
                messageDisplay.textContent = 'Incorrect!';
                messageDisplay.style.color = 'red';
            } else {
                messageDisplay.textContent = '';
            }
        });

        uiBox.appendChild(uiTitle);
        uiBox.appendChild(uiDescription);
        uiBox.appendChild(keyMessageContainer);
        uiBox.appendChild(inputField);
        uiBox.appendChild(messageDisplay);
        overlay.appendChild(uiBox);
        document.body.appendChild(overlay);

        inputField.focus();
    }
    
    // --- Create the second verification UI ---
    function createVerificationUI(parentOverlay) {
        // Clear the previous UI box content
        parentOverlay.innerHTML = '';

        const verificationBox = document.createElement('div');
        verificationBox.id = 'verification-box';
        verificationBox.style.cssText = `
            background-color: white;
            border: 2px solid black;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            max-width: 350px;
            font-family: Arial, sans-serif;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `;

        const verificationTitle = document.createElement('h1');
        verificationTitle.textContent = 'Human Verification, Allowance Key System';
        verificationTitle.style.cssText = `
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 10px;
        `;

        const verificationDescription = document.createElement('p');
        verificationDescription.textContent = 'Enter Allowance Key System code:';
        verificationDescription.style.cssText = `
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
        `;
        
        const verificationInput = document.createElement('input');
        verificationInput.id = 'verification-input';
        verificationInput.type = 'text';
        verificationInput.placeholder = 'Enter allowance key...';
        verificationInput.style.cssText = `
            width: 90%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
            text-align: center;
        `;
        
        const verificationMessage = document.createElement('p');
        verificationMessage.id = 'verification-message';
        verificationMessage.style.cssText = `
            font-size: 16px;
            color: red;
            height: 20px;
            margin-top: 15px;
            font-weight: bold;
        `;

        // The key for this second step
        const ALLOWANCE_KEY = 'kylestomatoshop';

        verificationInput.addEventListener('keyup', (e) => {
            const enteredKey = e.target.value.trim();

            if (enteredKey === ALLOWANCE_KEY) {
                verificationMessage.textContent = 'Verified!';
                verificationMessage.style.color = 'green';
                setTimeout(() => {
                    removeUI(); // Remove everything and restore the page
                }, 500);
            } else if (enteredKey !== '') {
                verificationMessage.textContent = 'Incorrect!';
                verificationMessage.style.color = 'red';
            } else {
                verificationMessage.textContent = '';
            }
        });

        verificationBox.appendChild(verificationTitle);
        verificationBox.appendChild(verificationDescription);
        verificationBox.appendChild(verificationInput);
        verificationBox.appendChild(verificationMessage);
        parentOverlay.appendChild(verificationBox);
        verificationInput.focus();
    }

    // Start the process by creating the password UI
    createPasswordUI();

})();


javascript:(()=>{
    // --- Global Configuration & Utilities (for both GUIs) ---
    const globalConfig = {
        fontAwesomeUrl: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
    };

    // Load Font Awesome once for both GUIs
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = globalConfig.fontAwesomeUrl;
    document.head.appendChild(fontAwesomeLink);

    // --- Side GUI (blooket-cheats-gui) Logic ---
    (function() { // Encapsulate side GUI logic in an IIFE
        const sideConfig = {
            panelWidth: '250px',
            panelTransitionDuration: '0.3s',
            autoRetractDelay: 200,
            colors: {
                mainBackground: 'linear-gradient(to bottom right, #000000, #330066)',
                secondaryBackground: 'linear-gradient(to top left, #1A0033, #000000)',
                shadow: 'rgba(138, 43, 226, 0.7)',
                mainText: '#FFFFFF',
                accentText: '#C3A5E8',
                tabNormal: 'rgba(255, 255, 255, 0.1)',
                tabHover: 'rgba(138, 43, 226, 0.5)',
                lockButton: 'rgba(138, 43, 226, 0.5)',
                lockButtonBorder: '#8A2BE2',
                hackerGreen: '#00FF00'
            },
            fonts: {
                title: "'Titan One', cursive",
                body: "'Nunito', sans-serif"
            },
            toolbarTitle: "Secret: Client Secret Vr90 Addon",
            overlayContents: { // Content functions for each full-screen overlay
                scriptsEnable: (timestamp) => `
                    <h2 style="font-family: ${sideConfig.fonts.title}; font-size: 1.5em; margin-bottom: 15px; color: ${sideConfig.colors.mainText};">
                        <i class="fas fa-code" style="margin-right: 10px;"></i>Script Activation Console
                    </h2>
                    <p>Status: <span style="color: ${sideConfig.colors.hackerGreen};">Active</span></p>
                    <p>Last Script Load: <span style="color: ${sideConfig.colors.hackerGreen};">${timestamp}</span></p>
                    <p>Module Count: <span style="color: ${sideConfig.colors.hackerGreen};">17</span></p>
                    <p>Integrity Check: <span style="color: ${sideConfig.colors.hackerGreen};">Passed</span></p>
                    <p style="margin-top: 20px; color: ${sideConfig.colors.accentText};">All custom scripts are loaded and operational. Monitoring for conflicts.</p>
                `,
                allowance: (timestamp) => `
                    <h2 style="font-family: ${sideConfig.fonts.title}; font-size: 1.5em; margin-bottom: 15px; color: ${sideConfig.colors.mainText};">
                        <i class="fas fa-file-contract" style="margin-right: 10px;"></i>Blooket Policy Interface
                    </h2>
                    <p>Compliance Status: <span style="color: ${sideConfig.colors.hackerGreen};">Optimal</span></p>
                    <p>Policy Version: <span style="color: ${sideConfig.colors.hackerGreen};">BKT-2024.1.2</span></p>
                    <p>Last Reviewed: <span style="color: ${sideConfig.colors.hackerGreen};">${timestamp}</span></p>
                    <p>User Agreement: <span style="color: ${sideConfig.colors.hackerGreen};">Accepted</span></p>
                    <p style="margin-top: 20px; color: ${sideConfig.colors.accentText};">Ensuring adherence to Blooket's terms of service and privacy guidelines.</p>
                `,
                api: (timestamp) => `
                    <h2 style="font-family: ${sideConfig.fonts.title}; font-size: 1.5em; margin-bottom: 15px; color: ${sideConfig.colors.mainText};">
                        <i class="fas fa-network-wired" style="margin-right: 10px;"></i>API Network Monitor
                    </h2>
                    <p>Server Status: <span style="color: ${sideConfig.colors.hackerGreen};">True</span></p>
                    <p>Active Connections: <span style="color: ${sideConfig.colors.hackerGreen};">1337</span></p>
                    <p>Data Packets Intercepted: <span style="color: ${sideConfig.colors.hackerGreen};">42069</span></p>
                    <p>Encryption Protocol: <span style="color: ${sideConfig.colors.hackerGreen};">AES-256</span></p>
                    <p>Last Activity: <span style="color: ${sideConfig.colors.hackerGreen};">${timestamp}</span></p>
                    <p style="margin-top: 20px; color: ${sideConfig.colors.accentText};">Monitoring network traffic for anomalies. All protocols secured.</p>
                `
            }
        };

        // Inject side GUI specific styles
        const sideStyle = document.createElement('style');
        sideStyle.innerHTML = `
            @import url('https://fonts.googleapis.com/css?family=Titan+One');
            @import url('https://fonts.googleapis.com/css?family=Nunito');

            .side-toolbar-panel {
                position: fixed;
                top: 0;
                left: 0; /* Always at left: 0 */
                width: ${sideConfig.panelWidth};
                height: 100vh;
                background: ${sideConfig.colors.mainBackground};
                color: ${sideConfig.colors.mainText};
                font-family: ${sideConfig.fonts.body};
                box-shadow: 2px 0 10px ${sideConfig.colors.shadow};
                transition: transform ${sideConfig.panelTransitionDuration} ease-in-out, opacity ${sideConfig.panelTransitionDuration} ease-in-out, visibility ${sideConfig.panelTransitionDuration};
                z-index: 9999;
                display: flex;
                flex-direction: column;
                padding: 10px;
                box-sizing: border-box;
                border-radius: 0 10px 10px 0;
                opacity: 0;
                visibility: hidden; /* Start completely hidden */
                pointer-events: none;
                transform: translateX(-100%); /* Start off-screen */
            }

            .side-toolbar-panel.is-expanded {
                opacity: 1;
                visibility: visible; /* Make visible */
                pointer-events: auto;
                transform: translateX(0); /* Slide into view */
            }

            .side-opener-button {
                position: fixed;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 30px;
                height: 60px;
                background: linear-gradient(to right, #330066, #000000);
                color: ${sideConfig.colors.mainText};
                font-size: 2em;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border-radius: 0 10px 10px 0;
                box-shadow: 2px 0 10px ${sideConfig.colors.shadow};
                z-index: 9998;
                transition: opacity ${sideConfig.panelTransitionDuration} ease-in-out;
                animation: side-panel-pulse 1.5s infinite alternate;
            }

            @keyframes side-panel-pulse {
                0% { box-shadow: 2px 0 10px ${sideConfig.colors.shadow}; }
                100% { box-shadow: 2px 0 20px ${sideConfig.colors.lockButtonBorder}; }
            }

            .side-opener-button.is-hidden {
                opacity: 0;
                pointer-events: none;
            }

            .side-top-controls {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                margin-bottom: 10px;
            }

            .side-title-display {
                font-family: ${sideConfig.fonts.title};
                font-size: 1.2em;
                color: ${sideConfig.colors.accentText};
                flex-grow: 1;
                text-align: center;
            }

            .side-lock-toggle, .side-unlock-toggle {
                background: ${sideConfig.colors.lockButton};
                border: 1px solid ${sideConfig.colors.lockButtonBorder};
                border-radius: 5px;
                padding: 5px 8px;
                cursor: pointer;
                color: ${sideConfig.colors.mainText};
                font-size: 0.9em;
                transition: background 0.2s ease;
            }

            .side-lock-toggle:hover, .side-unlock-toggle:hover {
                background: ${sideConfig.colors.lockButtonBorder};
            }

            .side-tab-button {
                display: flex;
                align-items: center;
                padding: 10px;
                cursor: pointer;
                transition: background 0.2s ease;
                margin-bottom: 5px;
                border-radius: 5px;
                background: ${sideConfig.colors.tabNormal};
                font-weight: bold;
            }

            .side-tab-button:hover {
                background: ${sideConfig.colors.tabHover};
            }

            .side-tab-button i {
                margin-right: 10px;
                font-size: 1.2em;
            }

            /* Full-screen overlay styles for side GUI */
            .side-full-screen-overlay {
                position: fixed;
                top: 0;
                left: 0; /* Default to full screen */
                width: 100vw; /* Default to full screen */
                height: 100vh;
                background: ${sideConfig.colors.secondaryBackground};
                z-index: 10000;
                display: none;
                align-items: flex-start;
                justify-content: flex-start;
                overflow: auto;
                padding: 20px;
                box-sizing: border-box;
            }

            .side-full-screen-overlay.is-active-with-panel {
                left: ${sideConfig.panelWidth}; /* Position next to toolbar */
                width: calc(100vw - ${sideConfig.panelWidth}); /* Adjust width */
            }

            .side-overlay-content {
                width: 100%;
                text-align: left;
                color: ${sideConfig.colors.hackerGreen};
                font-family: ${sideConfig.fonts.body};
                font-size: 0.9em;
                line-height: 1.4;
            }
            .side-overlay-content h2 {
                font-family: ${sideConfig.fonts.title};
                font-size: 1.5em;
                margin-bottom: 15px;
                color: ${sideConfig.colors.mainText};
            }
            .side-overlay-content p {
                margin: 5px 0;
                font-size: 0.9em;
            }
        `;
        document.head.appendChild(sideStyle);

        // Create Elements
        const sidePanel = document.createElement('div');
        sidePanel.classList.add('side-toolbar-panel');

        const sideTopControls = document.createElement('div');
        sideTopControls.classList.add('side-top-controls');

        const sideLockButton = document.createElement('button');
        sideLockButton.classList.add('side-lock-toggle');
        sideLockButton.innerHTML = '<i class="fas fa-lock"></i>';

        const sideUnlockButton = document.createElement('button');
        sideUnlockButton.classList.add('side-unlock-toggle');
        sideUnlockButton.style.display = 'none';
        sideUnlockButton.innerHTML = '<i class="fas fa-unlock"></i>';

        const sidePanelTitle = document.createElement('span');
        sidePanelTitle.classList.add('side-title-display');
        sidePanelTitle.innerText = sideConfig.toolbarTitle;

        sideTopControls.appendChild(sideLockButton);
        sideTopControls.appendChild(sidePanelTitle);
        sideTopControls.appendChild(sideUnlockButton);
        sidePanel.appendChild(sideTopControls);

        const sidePanelContentArea = document.createElement('div');
        sidePanelContentArea.style.flexGrow = '1';
        sidePanelContentArea.style.overflowY = 'auto';
        sidePanelContentArea.style.padding = '10px';
        sidePanel.appendChild(sidePanelContentArea);
        document.body.appendChild(sidePanel);

        const sideOpenerButton = document.createElement('div');
        sideOpenerButton.classList.add('side-opener-button');
        sideOpenerButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        document.body.appendChild(sideOpenerButton);

        const sideFullScreenOverlay = document.createElement('div');
        sideFullScreenOverlay.classList.add('side-full-screen-overlay');
        document.body.appendChild(sideFullScreenOverlay);

        // State Variables
        let isSidePanelVisible = false;
        let isSidePanelLocked = false;
        let currentSideActiveTab = null;
        let sideRetractTimeout = null;

        // Core Panel Functions
        const showSidePanel = () => {
            if (isSidePanelVisible) return;
            sidePanel.classList.add('is-expanded');
            sideOpenerButton.classList.add('is-hidden');
            isSidePanelVisible = true;
        };

        const hideSidePanel = () => {
            // Only hide if panel is visible, not locked, AND no full-screen overlay is active
            if (!isSidePanelVisible || isSidePanelLocked || sideFullScreenOverlay.style.display === 'flex') {
                return;
            }
            sidePanel.classList.remove('is-expanded');
            sideOpenerButton.classList.remove('is-hidden');
            isSidePanelVisible = false;
        };

        // Full-Screen Overlay Functions
        const showSideFullScreenOverlay = (contentHtml, tabIdentifier) => {
            if (currentSideActiveTab === tabIdentifier) {
                hideSideFullScreenOverlay(); // Toggle: if same tab clicked, close it
                return;
            }

            sideFullScreenOverlay.innerHTML = `<div class="side-overlay-content">${contentHtml}</div>`;

            // Adjust overlay position and width based on panel visibility
            if (isSidePanelVisible) {
                sideFullScreenOverlay.classList.add('is-active-with-panel');
            } else {
                sideFullScreenOverlay.classList.remove('is-active-with-panel');
            }

            sideFullScreenOverlay.style.display = 'flex'; // Show it
            currentSideActiveTab = tabIdentifier;
        };

        const hideSideFullScreenOverlay = () => {
            sideFullScreenOverlay.style.display = 'none';
            sideFullScreenOverlay.innerHTML = '';
            currentSideActiveTab = null;
            sideFullScreenOverlay.classList.remove('is-active-with-panel'); // Clean up class
        };

        // Event Listeners
        sideOpenerButton.addEventListener('click', showSidePanel);

        sideLockButton.addEventListener('click', () => {
            isSidePanelLocked = true;
            sideLockButton.style.display = 'none';
            sideUnlockButton.style.display = 'block';
            console.log("Side Panel Locked");
            clearTimeout(sideRetractTimeout);
        });

        sideUnlockButton.addEventListener('click', () => {
            isSidePanelLocked = false;
            sideLockButton.style.display = 'block';
            sideUnlockButton.style.display = 'none';
            console.log("Side Panel Unlocked");
            if (!sidePanel.matches(':hover')) {
                sideRetractTimeout = setTimeout(hideSidePanel, sideConfig.autoRetractDelay);
            }
        });

        sidePanel.addEventListener('mouseleave', () => {
            if (!isSidePanelLocked) {
                sideRetractTimeout = setTimeout(hideSidePanel, sideConfig.autoRetractDelay);
            }
        });

        sidePanel.addEventListener('mouseenter', () => {
            clearTimeout(sideRetractTimeout);
        });

        document.body.addEventListener('click', (event) => {
            if (sideFullScreenOverlay.style.display === 'flex' &&
                !sidePanel.contains(event.target) &&
                !sideOpenerButton.contains(event.target) &&
                !sideFullScreenOverlay.contains(event.target)) {
                hideSideFullScreenOverlay();
            }
        });

        // Tab Button Creation and Integration
        const makeSideTabButton = (text, iconCode, tabIdentifier, getContentFunction) => {
            const btn = document.createElement('div');
            btn.classList.add('side-tab-button');
            btn.innerHTML = `<i class="${iconCode}"></i><span>${text}</span>`;
            btn.addEventListener('click', (event) => {
                event.stopPropagation();
                const now = new Date();
                const timestamp = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
                showSideFullScreenOverlay(getContentFunction(timestamp), tabIdentifier);
            });
            return btn;
        };

        sidePanelContentArea.appendChild(makeSideTabButton('Scripts Enable', 'fas fa-code', 'scriptsEnable', sideConfig.overlayContents.scriptsEnable));
        sidePanelContentArea.appendChild(makeSideTabButton('Allowance', 'fas fa-dollar-sign', 'allowance', sideConfig.overlayContents.allowance));
        sidePanelContentArea.appendChild(makeSideTabButton('API', 'fas fa-cogs', 'api', sideConfig.overlayContents.api));

        // Initial state
        sidePanel.classList.remove('is-expanded');
        sideOpenerButton.classList.remove('is-hidden');
        console.log("Side GUI loaded.");
    })();

    (function() {
        'use strict';
    
        // Remove any existing UI to prevent duplicates
        if (document.getElementById('terminal-ui')) {
            document.getElementById('terminal-ui').remove();
        }
        if (document.getElementById('toggle-terminal-btn')) {
            document.getElementById('toggle-terminal-btn').remove();
        }
        if (document.getElementById('terminal-styles')) {
            document.getElementById('terminal-styles').remove();
        }
        // Remove bottom toolbar elements
        const existingBottomToolbar = document.querySelector('.main-bottom-action-toolbar');
        const existingBottomButton = document.querySelector('.bottom-edit-toggle-button');
        const existingBottomMessages = document.querySelectorAll('.bottom-message-ui');
        if (existingBottomToolbar) existingBottomToolbar.remove();
        if (existingBottomButton) existingBottomButton.remove();
        existingBottomMessages.forEach(msg => msg.remove());
    
        const config = {
            terminalBg: 'linear-gradient(to bottom, #111111, #330066)',
            terminalText: '#00ff00',
            promptColor: '#ff9900',
            successColor: '#00cc00',
            errorColor: '#ff3333',
            buttonBg: '#2b2b2b',
            buttonHoverBg: '#3c3c3c',
            processingColor: '#8a2be2',
            terminalWidth: '500px'
        };
    
        const bottomConfig = {
            toolbarHeight: '80px',
            buttonSize: '60px',
            iconSize: '2em',
            colors: {
                mainBackground: 'linear-gradient(to bottom right, #000000, #330066)',
                buttonBackground: 'rgba(138, 43, 226, 0.6)',
                buttonHover: '#8A2BE2',
                textColor: '#FFFFFF',
                tooltipBackground: '#333333',
                tooltipText: '#FFFFFF',
                fetchedBg: 'rgba(0, 128, 0, 0.8)',
                fetchedText: '#FFFFFF',
                dataAccessedBg: 'rgba(255, 165, 0, 0.8)',
                dataAccessedText: '#FFFFFF'
            },
            fonts: {
                body: "'Nunito', sans-serif"
            },
            messageUITimeout: 3000
        };
    
        // --- Inject Combined CSS Styles ---
        const styleSheet = document.createElement('style');
        styleSheet.id = 'terminal-styles';
        styleSheet.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap');
            @import url('https://fonts.googleapis.com/css?family=Nunito');
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
    
            body {
                font-family: 'Inter', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f0f2f5;
            }
    
            /* --- Combined Toggle Button --- */
            #unified-toggle-btn {
                position: fixed;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                width: 50px;
                height: 60px;
                background: linear-gradient(135deg, ${config.buttonBg} 0%, #404040 100%);
                color: white;
                border: 2px solid #555;
                border-radius: 15px 0 0 15px;
                cursor: pointer;
                font-size: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: -2px 0 15px rgba(0, 0, 0, 0.3);
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                z-index: 10000;
                backdrop-filter: blur(5px);
            }
    
            #unified-toggle-btn:hover {
                background: linear-gradient(135deg, ${config.buttonHoverBg} 0%, #505050 100%);
                transform: translateY(-50%) translateX(-5px) scale(1.05);
                box-shadow: -5px 0 20px rgba(0, 0, 0, 0.4);
                border-color: #777;
            }
    
            #unified-toggle-btn:active {
                transform: translateY(-50%) translateX(-2px) scale(0.98);
            }
    
            .unified-arrow-icon {
                transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                font-size: 20px;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                display: inline-block;
            }
            
            .unified-interfaces.is-visible ~ #unified-toggle-btn .unified-arrow-icon {
                color: ${config.successColor};
            }
    
            /* --- Terminal UI Container --- */
            .terminal-container {
                position: fixed;
                top: 0;
                left: 0;
                width: ${config.terminalWidth};
                height: 100%;
                background: ${config.terminalBg};
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                font-family: 'JetBrains Mono', monospace;
                color: white;
                z-index: 9999;
                transform: translateX(-100%);
                transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                pointer-events: none;
            }
    
            .unified-interfaces.is-visible .terminal-container {
                transform: translateX(0);
                pointer-events: auto;
            }
    
            /* --- Bottom Toolbar --- */
            .main-bottom-action-toolbar {
                position: fixed;
                bottom: -${bottomConfig.toolbarHeight};
                left: 0;
                right: ${config.terminalWidth}; /* Ends where terminal begins */
                height: ${bottomConfig.toolbarHeight};
                background: ${bottomConfig.colors.mainBackground};
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                padding: 0 20px;
                box-sizing: border-box;
                box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
                transition: bottom 0.3s ease-out, right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                z-index: 9998;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
    
            .unified-interfaces.is-visible .main-bottom-action-toolbar {
                bottom: 0;
                right: 0; /* NEW: Toolbar spans full width when terminal is open */
            }
    
            /* When interfaces are closed, toolbar spans full width */
            .unified-interfaces:not(.is-visible) .main-bottom-action-toolbar {
                right: 0;
            }
            
            /* --- Terminal Output & Input --- */
            .terminal-output {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                white-space: pre-wrap;
                word-wrap: break-word;
                line-height: 1.5;
                font-size: 14px;
                -webkit-overflow-scrolling: touch;
            }
    
            .terminal-line {
                margin-bottom: 5px;
                opacity: 0;
                animation: fadeInUp 0.3s ease-out forwards;
            }
    
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
    
            .terminal-prompt {
                color: ${config.promptColor};
            }
    
            .terminal-success {
                color: ${config.successColor};
            }
            
            /* --- Processing Message --- */
            .processing-message-container {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                text-align: center;
                padding: 15px;
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(138, 43, 226, 0.2), rgba(0, 0, 0, 0.8));
                color: ${config.processingColor};
                font-size: 1.5em;
                font-weight: bold;
                display: none;
                align-items: center;
                justify-content: center;
                gap: 10px;
                z-index: 10001;
                border-bottom: 2px solid ${config.processingColor};
                backdrop-filter: blur(10px);
            }
            
            .processing-message-container.is-visible {
                display: flex;
                animation: slideInDown 0.3s ease-out;
            }
    
            @keyframes slideInDown {
                from {
                    transform: translateY(-100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
    
            .processing-gear {
                animation: rotate 1.5s linear infinite;
                filter: drop-shadow(0 0 5px ${config.processingColor});
            }
    
            @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
    
            /* --- Ultra Run Switch --- */
            .controls-container {
                position: absolute;
                top: 20px;
                left: 20px; /* NEW: Positioned at the top left */
                display: flex;
                align-items: center;
                gap: 10px;
                z-index: 10002;
            }
    
            .switch-label {
                color: #fff;
                font-size: 12px;
                font-family: 'Inter', sans-serif;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                order: 2; /* NEW: Move label after the switch */
            }
    
            .switch {
                position: relative;
                display: inline-block;
                width: 34px;
                height: 20px;
                order: 1; /* NEW: Move switch to the front */
            }
            
            .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                transition: .4s;
                border-radius: 20px;
                box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
            }
            
            .slider:before {
                position: absolute;
                content: "";
                height: 16px;
                width: 16px;
                left: 2px;
                bottom: 2px;
                background-color: white;
                transition: .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                border-radius: 50%;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            }
            
            input:checked + .slider {
                background-color: ${config.successColor};
                box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 204, 0, 0.3);
            }
            
            input:checked + .slider:before {
                transform: translateX(14px);
            }
    
            .terminal-input-container {
                display: flex;
                align-items: center;
                padding: 15px 20px;
                border-top: 1px solid #333;
                background: rgba(0, 0, 0, 0.2);
                backdrop-filter: blur(10px);
            }
    
            #terminal-input {
                flex: 1;
                background: transparent;
                border: none;
                outline: none;
                color: white;
                font-family: 'JetBrains Mono', monospace;
                font-size: 14px;
                caret-color: ${config.terminalText};
            }
    
            #terminal-input:focus {
                text-shadow: 0 0 5px ${config.terminalText};
            }
    
            /* --- Bottom Toolbar Buttons --- */
            .bottom-toolbar-action-button {
                width: ${bottomConfig.buttonSize};
                height: ${bottomConfig.buttonSize};
                background: ${bottomConfig.colors.buttonBackground};
                color: ${bottomConfig.colors.textColor};
                border: 1px solid ${bottomConfig.colors.buttonHover};
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: ${bottomConfig.iconSize};
                cursor: pointer;
                position: relative;
                transition: background 0.2s ease, transform 0.1s ease;
            }
            .bottom-toolbar-action-button:hover {
                background: ${bottomConfig.colors.buttonHover};
                transform: translateY(-5px);
            }
            .bottom-toolbar-action-button:active {
                transform: translateY(0);
            }
    
            /* --- Tooltip --- */
            .bottom-toolbar-tooltip {
                position: absolute;
                bottom: calc(100% + 10px);
                left: 50%;
                transform: translateX(-50%);
                background: ${bottomConfig.colors.tooltipBackground};
                color: ${bottomConfig.colors.tooltipText};
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 0.8em;
                white-space: nowrap;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.2s ease, visibility 0.2s ease;
                pointer-events: none;
                z-index: 10001;
            }
            .bottom-toolbar-action-button:hover .bottom-toolbar-tooltip {
                opacity: 1;
                visibility: visible;
            }
    
            /* --- Message UIs --- */
            .bottom-message-ui {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 20px 40px;
                border-radius: 10px;
                font-family: ${bottomConfig.fonts.body};
                font-size: 2em;
                font-weight: bold;
                text-align: center;
                box-shadow: 0 5px 15px rgba(0,0,0,0.5);
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
                z-index: 10002;
            }
            .bottom-message-ui.is-visible {
                opacity: 1;
                visibility: visible;
            }
    
            .bottom-fetched-message {
                background: ${bottomConfig.colors.fetchedBg};
                color: ${bottomConfig.colors.fetchedText};
            }
    
            .bottom-data-accessed-message {
                background: ${bottomConfig.colors.dataAccessedBg};
                color: ${bottomConfig.colors.dataAccessedText};
            }
    
            /* --- Enhanced Scrollbar --- */
            .terminal-output::-webkit-scrollbar {
                width: 8px;
            }
            .terminal-output::-webkit-scrollbar-track {
                background: rgba(43, 43, 43, 0.5);
                border-radius: 4px;
            }
            .terminal-output::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #555, #777);
                border-radius: 4px;
                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
            }
            .terminal-output::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #777, #999);
            }
    
            /* --- Opening Animation --- */
            .unified-interfaces.opening .terminal-container {
                animation: pulseGlow 0.4s ease-out;
            }
    
            @keyframes pulseGlow {
                0% {
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                }
                50% {
                    box-shadow: 0 4px 30px rgba(0, 255, 0, 0.3), 0 4px 20px rgba(0, 0, 0, 0.4);
                }
                100% {
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                }
            }
        `;
        document.head.appendChild(styleSheet);
    
        // --- Create Unified HTML Structure ---
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'unified-toggle-btn';
        toggleBtn.innerHTML = '<span class="unified-arrow-icon">&#9654;</span>'; // Right arrow when closed
        toggleBtn.title = 'Open Terminal & Toolbar';
        document.body.appendChild(toggleBtn);
    
        // Container for both interfaces
        const unifiedContainer = document.createElement('div');
        unifiedContainer.classList.add('unified-interfaces');
        
        // Terminal UI
        const terminalUi = document.createElement('div');
        terminalUi.id = 'terminal-ui';
        terminalUi.classList.add('terminal-container');
        terminalUi.innerHTML = `
            <div id="terminal-output" class="terminal-output"></div>
            <div id="processing-message" class="processing-message-container">
                <span class="processing-gear">⚙️</span> Processing Command
            </div>
            <form id="terminal-form" class="terminal-input-container">
                <span class="terminal-prompt">admin@client:~$ </span>
                <input type="text" id="terminal-input" placeholder="Enter command..." autofocus>
            </form>
        `;
    
        // Bottom Toolbar
        const mainBottomToolbar = document.createElement('div');
        mainBottomToolbar.classList.add('main-bottom-action-toolbar');
    
        // Message UIs
        const bottomFetchedMessage = document.createElement('div');
        bottomFetchedMessage.classList.add('bottom-message-ui', 'bottom-fetched-message');
        bottomFetchedMessage.innerText = 'Fetched!';
    
        const bottomDataAccessedMessage = document.createElement('div');
        bottomDataAccessedMessage.classList.add('bottom-message-ui', 'bottom-data-accessed-message');
        bottomDataAccessedMessage.innerText = 'Data Accessed!';
    
        // Append to unified container and body
        unifiedContainer.appendChild(terminalUi);
        unifiedContainer.appendChild(mainBottomToolbar);
        document.body.appendChild(unifiedContainer);
        document.body.appendChild(bottomFetchedMessage);
        document.body.appendChild(bottomDataAccessedMessage);
    
        // --- Get References ---
        const terminalInput = document.getElementById('terminal-input');
        const terminalOutput = document.getElementById('terminal-output');
        const processingMessage = document.getElementById('processing-message');
        const terminalForm = document.getElementById('terminal-form');
    
        // --- Bottom Toolbar Functionality ---
        const createBottomToolbarButton = (iconClass, tooltipText, onClickHandler) => {
            const button = document.createElement('div');
            button.classList.add('bottom-toolbar-action-button');
            button.innerHTML = `<i class="${iconClass}"></i><span class="bottom-toolbar-tooltip">${tooltipText}</span>`;
            button.addEventListener('click', onClickHandler);
            return button;
        };
    
        const refreshPage = () => window.location.reload();
        
        const crashPage = () => {
            console.warn("Attempting to simulate page crash...");
            try {
                let hugeArray = [];
                for (let i = 0; i < 10000000; i++) {
                    hugeArray.push(new Array(1000).fill('crash_data_string'));
                }
            } catch (e) {
                console.error("Error during crash simulation:", e);
            }
        };
    
        const showBottomFetchedUI = () => {
            bottomFetchedMessage.classList.add('is-visible');
            setTimeout(() => bottomFetchedMessage.classList.remove('is-visible'), bottomConfig.messageUITimeout);
        };
    
        const showBottomDataAccessedUI = () => {
            bottomDataAccessedMessage.classList.add('is-visible');
            setTimeout(() => bottomDataAccessedMessage.classList.remove('is-visible'), bottomConfig.messageUITimeout);
        };
    
        const teleportToBlooketPlay = () => {
            window.location.href = 'https://www.blooket.com/play';
        };
    
        // Add buttons to toolbar
        mainBottomToolbar.appendChild(createBottomToolbarButton('fas fa-sync-alt', 'Refresh Page', refreshPage));
        mainBottomToolbar.appendChild(createBottomToolbarButton('fas fa-bomb', 'Crash Page', crashPage));
        mainBottomToolbar.appendChild(createBottomToolbarButton('fas fa-cloud-download-alt', 'Fetch Data', showBottomFetchedUI));
        mainBottomToolbar.appendChild(createBottomToolbarButton('fas fa-database', 'Access Data', showBottomDataAccessedUI));
        mainBottomToolbar.appendChild(createBottomToolbarButton('fas fa-gamepad', 'Go to Blooket Play', teleportToBlooketPlay));
    
        // --- Unified Toggle Functionality ---
        toggleBtn.addEventListener('click', () => {
            const isOpening = !unifiedContainer.classList.contains('is-visible');
            const arrowIcon = toggleBtn.querySelector('.unified-arrow-icon');
            
            unifiedContainer.classList.toggle('is-visible');
            
            if (isOpening) {
                unifiedContainer.classList.add('opening');
                terminalInput.focus();
                
                arrowIcon.innerHTML = '&#9664;'; // Left arrow when open
                toggleBtn.title = 'Close Terminal & Toolbar';
                
                setTimeout(() => {
                    unifiedContainer.classList.remove('opening');
                }, 400);
            } else {
                arrowIcon.innerHTML = '&#9654;'; // Right arrow when closed
                toggleBtn.title = 'Open Terminal & Toolbar';
            }
        });
    
        // Keyboard shortcut (Ctrl/Cmd + `)
        document.addEventListener('keydown', (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === '`') {
                event.preventDefault();
                toggleBtn.click();
            }
        });
    
        // --- Terminal Functionality ---
        function executeCommand(command) {
            if (command.toLowerCase() === 'clear') {
                terminalOutput.innerHTML = '';
            } else if (command.toLowerCase() === 'help') {
                const helpLine = document.createElement('div');
                helpLine.classList.add('terminal-line', 'terminal-success');
                helpLine.textContent = `Available commands: clear, help | Shortcut: Ctrl+\` to toggle interface`;
                terminalOutput.appendChild(helpLine);
            } else {
                const responseLine = document.createElement('div');
                responseLine.classList.add('terminal-line', 'terminal-success');
                responseLine.textContent = `✓ Executed Admin Command Successfully: ${command}`;
                terminalOutput.appendChild(responseLine);
            }
    
            terminalInput.value = '';
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    
        terminalForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const command = terminalInput.value.trim();
            if (command) {
                const newCommandLine = document.createElement('div');
                newCommandLine.classList.add('terminal-line');
                newCommandLine.innerHTML = `<span class="terminal-prompt">admin@client:~$</span> ${command}`;
                terminalOutput.appendChild(newCommandLine);
                
                if (ultraRunSwitch.checked) {
                    executeCommand(command);
                } else {
                    processingMessage.classList.add('is-visible');
                    setTimeout(() => {
                        processingMessage.classList.remove('is-visible');
                        executeCommand(command);
                    }, 3000);
                }
            }
        });
    
        // Initialize with welcome message
        setTimeout(() => {
            const welcomeMessage = document.createElement('div');
            welcomeMessage.classList.add('terminal-line', 'terminal-prompt');
            welcomeMessage.innerHTML = 'Welcome to the unified interface! Terminal + Toolbar combined. Type "help" for commands.';
            terminalOutput.appendChild(welcomeMessage);
        }, 100);
    
        console.log("Unified Terminal + Toolbar interface loaded.");
    })();
    

    javascript:(()=>{
        let c = document.querySelector("iframe");
        if (c || ((c = document.createElement("iframe")).style.display = "none", document.body.append(c)), c.contentWindow.console.log.call(window, "%c Blooket Cheats %c\n\tBy MIKI201487", "color: #8A2BE2; font-size: 3rem", "color: #BF40BF; font-size: 1rem"), c.contentWindow.console.log.call(window, "%c\tSecret", "color: #8A2BE2; font-size: 1rem"), c.contentWindow.console.log.call(window, "%c\tStar the github repo!%c  https://github.com/Blooket-Council/Blooket-Cheats", "color: #BF40BF; font-size: 1rem", ""), "function call() { [native code] }" == window.fetch.call.toString()) {
            const e = window.fetch.call;
            window.fetch.call = function() {
                if (!arguments[1].includes("s.blooket.com/rc")) return e.apply(this, arguments)
            }
        }
        const qe = 1747005941679;
        let He = -1;
        const d = async() => {
            const o = document.createElement("div"),
                t = (Object.assign(o.style, {
                    top: window.innerHeight / 2 - 250 + "px",
                    left: innerWidth / 2 - 400 + "px"
                }), {
                    "--highlight": "#8A2BE2", // Blue Violet for accents
                    "--highlight2": "#9370DB", // Medium Purple for secondary accents
                    "--background": "linear-gradient(to bottom right, #000000, #330066)", // Black to deep purple gradient
                    "--background2": "linear-gradient(to top left, #1A0033, #000000)", // Dark purple to black gradient
                    "--textColor": "#FFFFFF", // White for main text
                    "--textColor2": "#C3A5E8", // Light purple for secondary text
                    "--toggleOff": "#7F00FF", // Lighter purple/magenta for toggles off state
                    "--toggleOn": "#BF40BF" // Brighter purple for toggles on state
                });
            let R = "SecretVr90.MIKI201487"; // Updated localStorage key
            const n = {
                data: null,
                setItem(e, n) {
                    return e.split(".").reduce((e, t, a, o) => ((++a == o.length && (e[t] = n)), t in e ? e[t] : (e[t] = {})), this.data), localStorage.setItem(R, JSON.stringify(this.data)), n
                },
                deleteItem(e) {
                    return e.split(".").reduce((e, t, a, o) => ((++a == o.length && delete e[t], e[t])), this.data), localStorage.setItem(R, JSON.stringify(this.data)), this.data
                },
                setData(e) {
                    this.data = e, localStorage.setItem(R, JSON.stringify(this.data))
                }
            }, G = {
                ctrl: !0,
                shift: !1,
                alt: !1,
                key: "e"
            }, I = {
                ctrl: !0,
                shift: !1,
                alt: !1,
                key: "x"
            };
            for (const De in t) o.style.setProperty(De, t[De]);
            try {
                n.data = JSON.parse(localStorage.getItem(R) || "{}")
            } catch {
                localStorage.setItem(R, "{}"), n.data = {}
            } finally {
                for (const Ne in n.data.theme || {}) o.style.setProperty("--" + Ne, n.data.theme[Ne]);
                n.data.hideKey ??= G, n.data.closeKey ??= I
            }
            var e = document.createElement("style");
            const u = {},
                h = {};
            e.innerHTML = "@import url('https://fonts.googleapis.com/css?family=Titan+One');\n@import url('https://fonts.googleapis.com/css?family=Nunito');" + `.bigTextContainer,.version{align-items:center;user-select:none}.cheatsList>div,.settingsPage>div{padding:5px 10px}.gamemode,.gui,.leaderboardList,.sidebar{box-sizing:border-box}.controls>div,.credit,.pathText,.runCheat,.sidebarPath,.version{user-select:none}.noScroll::-webkit-scrollbar{display:none}.noScroll{-ms-overflow-style:none;scrollbar-width:none}.gui{position:fixed;z-index:100;background:var(--background);height:500px;width:800px;color:var(--textColor);box-shadow:2px 2px 2px rgba(138, 43, 226, 0.5);padding-left:50px;font-size:16px;cursor:grab;border-radius:10px;}.controls,.credit,.gamemodesList,.guiContent,.guiTopBar,.sidebar,.sidebarShadow,.version{position:absolute}.sidebarShadow{inset:0;background:#000;opacity:0%;pointer-events:none;transition:.2s;z-index:9}.controls>div,.guiContent,.sidebar,select[data-type] option{background:var(--background2)}.sidebarShadow:has(~ .sidebar:hover){opacity:40%}.credit{bottom:0;left:0;right:0;height:0;transition:.1s;overflow:hidden;text-align:center}.sidebar{top:0;left:0;height:100%;width:50px;transition:.2s 0.1s;z-index:10;overflow-x:hidden;padding-bottom:30px}.sidebar:hover{width:200px;transition-delay:0s}.sidebar:hover>.credit{height:25px;transition:.4s 0.2s}.guiContent{inset:20px;left:70px;top:40px;z-index:1;padding-top:32px}.guiTopBar{z-index:1;top:0;left:50px;right:0;height:25px}.version{top:0;left:0;margin-inline:10px;color:#888;font-size:.9em;letter-spacing:.5px;height:100%;display:flex}.controls{top:0;right:0;display:grid;grid-template-columns:1fr 1fr;height:25px;width:82px;gap:1px;border:1px solid var(--background);z-index:2}.controls>div{display:grid;place-items:center;font-weight:100}.closeControl{transition:.1s}.closeControl:hover{background:#B024E3;}.creditsPage,.gamemodesPage,.searchPage{position:absolute;inset:0;top:32px}.gamemodesList{display:grid;gap:0 30px;padding-inline:30px;margin-top:0;padding-top:15px;margin-bottom:0;grid-template-columns:1fr 1fr;overflow-y:scroll;inset:0}.leaderboardPage,.logsPage{inset:10px;position:absolute}.pathText{position:absolute;top:40px;left:70px;right:20px;z-index:3;padding:7px 10px;height:22px}.clearLogsButton,.refreshControl{z-index:5;place-items:center;cursor:pointer}.leaderboardPage{top:42px}.leaderboardList{list-style:none;margin:0;padding:20px 40px 10px;height:100%;overflow:scroll;font-size:1.5em}.logsPage{top:37px;background:#000d;border-radius:2.5px}.logMessages{list-style:none;margin:10px;padding:0;display:flex;flex-direction:column-reverse;overflow-y:scroll;word-wrap:break-word;position:absolute;inset:0}.clearLogsButton{position:absolute;top:5px;right:5px;width:25px;height:25px;display:grid;scale:-1 1 1;transition:.2s}.searchbarHolder{display:flex;outline:2px solid var(--highlight);margin:10px 20px;height:30px;font-size:2em}.searchbarInput{outline:0;border:none;background:0 0;color:var(--textColor);flex:1;font-size:.5em;font-family:Nunito;padding-inline:5px}.gamemode,.settingsPage>div{border-radius:2.5px;background:var(--background)}.searchbarButton{color:var(--textColor);font-size:.6em;aspect-ratio:1/1;height:30px;display:grid;place-items:center;cursor:pointer}.bigText,.bigTextContainer{height:50px;width:200px;font-family:Titan One}.searchResults{position:absolute;inset:0;top:45px;padding-inline:20px;overflow-y:scroll}.favoritesPage,.settingsPage{inset:0;top:32px;overflow-y:scroll;position:absolute}.noResult{margin:20px 10px;font-size:.85em}.clearLogsButton:hover,.licenseMessage{font-size:1.25em}.favoritesPage{padding-block:10px;padding-inline:20px}.licenseMessage{font-weight:900;padding-inline:20px;margin-top:10px}.copyrightTag{font-size:.7em;font-weight:200;position:absolute;bottom:0;left:0;padding:5px 8px}.codingCredits,.creditLinks,.uploadDates{list-style:none;padding-inline:20px;margin-block:16px}.settingsPage{padding:10px;display:flex;flex-direction:column;gap:10px}.sidebarPaths{display:flex;flex-direction:column;width:200px;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;}.sidebarPaths::-webkit-scrollbar{display:none;}.bigTextContainer{display:flex;font-size:2em;margin-block:10px;transition:font-size .2s .1s,margin-block .2s .1s;justify-content:center;align-items:center;}.bigText{display:flex;align-items:center;justify-content:center;}.refreshControl{position:absolute;top:45px;right:25px;width:25px;height:25px;display:grid}.gamemode{width:100%;height:200px;margin-bottom:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;padding-top:10px;position:relative;overflow:hidden;padding-bottom:35px;transition:.4s}.contentPage,.gamemode>div{position:absolute;bottom:0}.gamemode:hover{box-shadow:0 0 10px var(--highlight);transition:.2s}.gamemode>img{width:85%;max-width:100%;max-height:100%}.gamemode>div{left:0;right:0;height:25px;background:var(--highlight);display:flex;justify-content:center;align-items:center;box-shadow:0 -5px 5px #0004;font-weight:800;font-size:1.1em;transition:.25s}.contentPage{inset-inline:0;top:35px}.cheatsList{display:flex;flex-direction:column;height:100%;overflow-y:scroll;padding-inline:10px}.cheatToggle,.cheatToggle>.toggleTrigger,.runCheat{height:35px;border-radius:2.5px}.cheatsList>div{display:grid;margin-bottom:10px;position:relative;background:var(--background);border-radius:2.5px}.cheatInfo,.cheatInputs,.cheatName,.cheatTop,.logMessage>span,.runCheat,.sidebarPath,.sidebarPath>i{display:flex}.cheatInfo{flex-direction:column;flex:1}.cheatName{font-size:1.5em;font-weight:700}.cheatDescription{font-size:.8em;margin-right:25px}.runCheat{--buttonColor:var(--highlight);width:20%;background:var(--buttonColor);margin-block:auto;cursor:pointer;align-items:center;justify-content:center;font-weight:800;transition:.5s;color:var(--textColor)!important}.runCheat:hover{box-shadow:0 0 10px 0 var(--buttonColor);transition:.3s}.runCheat:active{box-shadow:0 0 0 0 var(--buttonColor);transition:50ms}.cheatInputs{margin:5px 0 5px 5px;flex-direction:column;gap:5px}.searchResult,.standing{margin-bottom:10px;transition:.2s}.creditsPage>ul>li>strong,.logMessage img,.standingBlook{margin-right:5px}.cheatInputs>div{display:flex;flex-direction:row;font-size:.8rem;color:var(--highlight);font-weight:700;align-items:center}.cheatInputs>div>span{flex:1}.cheatToggle{width:20%;background:var(--highlight2);margin-block:auto;cursor:pointer;position:relative}.cheatToggle>.toggleTrigger{width:45px;position:absolute;top:0;left:0;background:var(--highlight);pointer-events:none;transition:left .2s,box-shadow .5s;z-index:1}.cheatToggle:hover>.toggleTrigger{box-shadow:0 0 10px 0 var(--highlight);transition:left .2s,box-shadow .2s}.toggleTrigger.active{left:calc(100% - 45px)}.toggleColor{position:absolute;inset:10px 20px;background:rgb(from var(--toggleOff) r g b / 25%);border-radius:2.5px;transition:.2s}.toggleTrigger.active+.toggleColor{background:rgb(from var(--toggleOn) r g b / 25%)}input[data-type],select[data-type]{width:20%;height:25px;outline:0;border:2px solid var(--highlight);box-sizing:border-box;background:0 0;color:var(--textColor);font-size:.9em;padding-left:5px;font-family:Nunito;border-radius:2px;font-weight:800}.logo,.sidebarPath>i{width:50px;height:50px}select[data-type]{-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:''}input::placeholder{color:rgb(from var(--textColor) r g b / 50%)}input[data-type]::-webkit-inner-spin-button,input[data-type]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[data-type][type=number]{-moz-appearance:textfield}select[data-type] option{border-radius:0}select[data-type]::-ms-expand{display:none}.sidebarPath{align-items:center;cursor:pointer;transition:.2s 0.1s}.searchResult:hover,.sidebarPath:hover{color:var(--highlight);text-shadow:0 0 5px var(--highlight)}.sidebarPath>i{justify-content:center;align-items:center;font-size:1.5em}.sidebarPath>span{padding-left:5px}.sidebar:hover .sidebarPath{padding-left:20px;transition-delay:0s}.logo{left:0;transition:left .2s .1s;display:grid;place-items:center;min-width:50px;position:absolute}.sidebar:hover .logo{left:28px;transition:left .2s}.bigText{margin-top:0px;transition:margin-top .1s}.sidebar:hover .bigText{margin-top:0;transition:margin-top .4s 0.1s}.sidebar:hover .bigTextContainer{font-size:2.5em;margin-block:20px;transition:font-size .2s,margin-block .2s}.creditsPage>ul>li>span{color:var(--textColor2);font-weight:800}.creditsPage>ul>li i{margin-inline:2px;line-height:1}.creditsPage a{color:var(--highlight);text-decoration:none}.creditsPage a:hover,.pathPage:hover{text-decoration:underline}.warning{color:var(--highlight2);font-size:.85em}.searchResult{cursor:pointer}.searchResultName{font-weight:800}.searchResultDescription{font-size:.8em}.searchResultSeparator{font-size:1.5em;font-weight:800;margin-block:10px;cursor:pointer;transition:.2s;border-bottom:2px solid var(--textColor);padding-inline:5px;filter:drop-shadow(0px 0px 0px var(--highlight))}.searchResultSeparator:hover{color:var(--highlight);border-bottom:2px solid var(--highlight);filter:drop-shadow(0px 0px 2.5px var(--highlight))}.toggleCheat{--buttonColor:var(--toggleOff)}.toggleCheat.active{--buttonColor:var(--toggleOn)}.logMessage img{height:1em;align-self:center}.standing{display:flex;font-weight:800;align-items:center;position:relative;padding:5px 10px 5px 50px;border-radius:2.5px;background:var(--highlight2)}.standing:before{content:attr(data-place) ".";margin-right:10px}.standing::after{content:attr(data-value);flex:1;text-align:right;font-weight:100}.standing:hover{background:var(--standingColor);box-shadow:0 0 7.5px var(--standingColor)}.standingBlook{height:1.25em;align-self:center;position:absolute;left:10px}.favoriteButton,.favoriteButton>i{transition:.2s;display:grid;place-items:center;width:32px;height:32px}.favoriteButton{font-size:.8em;padding-left:5px;cursor:pointer}.favoriteButton:hover{color:#ff0}.favoriteButton>i{position:absolute;scale:0;transform-origin:50% 55%}.favoriteButton>i.filled{scale:1}.pathPage{cursor:pointer;color:var(--highlight)}[data-favorited=false],[data-favorites="0"]{display:none}\n         [data-mode][data-name][data-description] {}`.replace(/\.([^0-9][\w-]+)/gm, (e, t) => "." + (u[t] ??= Ee(10))).replace(/data-(\w+)/gm, (e, t) => "data-" + (h[t] ??= Ee(10))), o.className = u.gui, o.append(e);
            var e = document.createElement("div"),
                e = (e.className = u.sidebarShadow, o.appendChild(e), document.createElement("div")),
                F = (e.className = u.credit, e.innerText = "Created by MIKI201487", document.createElement("div")); // Changed username
            F.className = u.sidebar, F.append(e);
            const q = document.createElement("div");
            q.className = u.guiContent;
            var e = document.createElement("div"),
                a = (e.className = u.guiTopBar, document.createElement("span"));
            a.className = u.version, a.innerText = "Client: Secret Vr90", e.append(a); // Changed client name
            const H = document.createElement("div");
            H.className = u.controls;
            // Removed original draggable handle 'a'
            const r = document.createElement("div");
            let j = !(r.innerHTML = '<i class="fas fa-compress" style="line-height: 1"></i>');
            r.onclick = () => {
                if (j != (j = !0)) {
                    const t = r.minimized;
                    if (t) { // Minimized -> Expanded
                        r.innerHTML = '<i class="fas fa-compress" style="line-height: 1"></i>';
                        o.animate([{
                            width: "650px", // Adjusted minimized width
                            height: "27px",
                            left: o.style.left
                        }, {
                            width: "800px",
                            height: "500px",
                            left: parseInt(o.style.left) + (t ? -150 : 150) + "px" // Adjusted left offset
                        }], {
                            duration: 200,
                            easing: "ease"
                        });
                        o.style.width = "800px";
                        o.style.height = "500px";
                        F.style.display = "block"; // Show sidebar
                        q.style.display = "block"; // Show content
                        a.style.display = "flex"; // Show version span
                        o.style.paddingLeft = "50px"; // Restore padding
                        i.style.display = 'block'; // Show path text when expanded
    
                        // Hide minimized-specific title and show full 'Secret'
                        o.querySelector('.minimized-text-container')?.remove();
                        ke.querySelector('.bigText-minimized')?.remove(); // Remove the minimized 'S'
                        ke.querySelector('.bigText-expanded').style.display = 'flex'; // Show 'Secret' full text
                        ke.style.justifyContent = 'center'; // Center the Secret text
                        ke.style.paddingLeft = '0'; // Remove padding on expanded title container
    
                    } else { // Expanded -> Minimized
                        r.innerHTML = '<i class="fas fa-expand" style="line-height: 1"></i>';
                        o.animate([{
                            width: "800px",
                            height: "500px",
                            left: o.style.left
                        }, {
                            width: "650px", // Adjusted minimized width
                            height: "27px",
                            left: parseInt(o.style.left) + (t ? -150 : 150) + "px" // Adjusted left offset
                        }], {
                            duration: 200,
                            easing: "ease"
                        });
                        o.style.width = "650px"; // Set minimized width
                        o.style.height = "27px";
                        o.style.borderRadius = "10px"; // Apply curved corners to minimized GUI
                        F.style.display = "none"; // Hide sidebar
                        q.style.display = "none"; // Hide content
                        a.style.display = "none"; // Hide version span (Client: Secret Vr90 from top right)
                        o.style.paddingLeft = "0px"; // Remove padding
                        i.style.display = 'none'; // Hide path text when minimized
    
                        // Hide full 'Secret' and show minimized-specific title
                        ke.querySelector('.bigText-expanded').style.display = 'none'; // Hide full 'Secret'
    
                        let minimizedTitle = ke.querySelector('.bigText-minimized');
                        if (!minimizedTitle) {
                            minimizedTitle = document.createElement('span');
                            minimizedTitle.className = u.bigText + ' bigText-minimized';
                            minimizedTitle.innerText = 'S'; // Only "S"
                            Object.assign(minimizedTitle.style, {
                                fontSize: '1.1em', // Tiny bit smaller 'S'
                                width: 'fit-content',
                                textAlign: 'left',
                                marginLeft: 'auto', // Push to the right
                                marginRight: '15px' // Space from the border
                            });
                            ke.appendChild(minimizedTitle);
                        }
                        minimizedTitle.style.display = 'flex'; // Show "S"
                        ke.style.justifyContent = 'flex-end'; // Push "S" to the right
    
                        // Add minimized state text elements for "Client: Secret Vr90"
                        let minimizedClientNameContainer = o.querySelector('.minimized-client-name-container');
                        if (!minimizedClientNameContainer) {
                            minimizedClientNameContainer = document.createElement('div');
                            minimizedClientNameContainer.className = 'minimized-client-name-container';
                            Object.assign(minimizedClientNameContainer.style, {
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: 'calc(100% - 84px)', // Take up space minus buttons
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center', // Center the text
                                color: 'var(--textColor)',
                                fontSize: '0.8em',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                paddingLeft: '10px',
                                boxSizing: 'border-box'
                            });
                            minimizedClientNameContainer.innerHTML = `<span>Client: Secret Vr90</span>`;
                            o.appendChild(minimizedClientNameContainer);
                        }
                        minimizedClientNameContainer.style.display = 'flex';
                    }
                    setTimeout(() => {
                        j = !1
                    }, t ? 200 : 0);
                    o.style.left = parseInt(o.style.left) + (t ? -150 : 150) + "px"; // Adjusted left offset
                    r.minimized = !t
                }
            };
            var _, V, U, $, K, W, s = document.createElement("div"),
                s = (s.className = u.closeControl, s.innerHTML = '<i class="fas fa-times" style="line-height: 1"></i>',
                    s.onclick = () => {
                        const confirmUI = document.createElement('div');
                        confirmUI.style.cssText = `
                            position: absolute; /* Changed to absolute to position relative to parent GUI */
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            background: #000000; /* Solid black */
                            border: 2px solid var(--highlight);
                            padding: 20px;
                            z-index: 101;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 250px; /* Less width */
                            height: 150px; /* More length */
                            gap: 15px;
                            color: white; /* White text */
                            font-family: 'Nunito';
                            border-radius: 10px; /* Curved corners */
                            box-shadow: 0 0 15px rgba(138, 43, 226, 0.7); /* Purple shadow */
                        `;
                        confirmUI.innerHTML = `
                            <p style="margin: 0; font-size: 1.5em;">Are you sure you want to close the Interface?</p>
                            <div style="display: flex; gap: 20px;">
                                <button id="confirm-yes" style="background: var(--toggleOn); color: var(--textColor); padding: 10px 20px; border: 1px solid var(--highlight); border-radius: 3px; cursor: pointer; font-size: 1em;">Yes</button>
                                <button id="confirm-no" style="background: var(--toggleOff); color: var(--textColor); padding: 10px 20px; border: 1px solid var(--highlight); border-radius: 3px; cursor: pointer; font-size: 1em;">No</button>
                            </div>
                        `;
                        o.appendChild(confirmUI); // Append to main UI 'o'
    
                        document.getElementById('confirm-yes').onclick = () => {
                            confirmUI.remove();
                            o.remove();
                            clearInterval(A.interval);
                            for (const t in l)
                                for (const a of l[t].cheats) a.enabled && a.run();
                            window.removeEventListener("keydown", Le);
                        };
    
                        document.getElementById('confirm-no').onclick = () => {
                            confirmUI.remove();
                        };
                    },
                    H.append(r, s), // Removed 'a' here
                    _ = o, // Made the main GUI element '_' for dragging
                    V = o, // V remains 'o'
                    W = K = $ = U = 0,
                    _.onpointerdown = function(e = window.event) { // Drag logic applied to main GUI
                        _.style.cursor = "grabbing", K = e.clientX, W = e.clientY, document.onpointerup = function() {
                            _.style.cursor = "grab", document.onpointermove = null, document.onpointerup = null
                        }, document.onpointermove = function(e = window.event) {
                            U = K - e.clientX, $ = W - e.clientY, K = e.clientX, W = e.clientY, V.style.top = V.offsetTop - $ + "px", V.style.left = V.offsetLeft - U + "px"
                        }
                    }, document.createElement("div")),
                J = (s.className = u.gamemodesPage, document.createElement("div"));
            J.className = u.noScroll + " " + u.gamemodesList;
            const g = [
                ["Gamemodes", s]
            ],
                i = document.createElement("div");
            i.className = u.pathText, g.createPage = function(e, t, a) {
                var o = document.createElement("span");
                return o.innerText = e, a || (o.className = u.pathPage), o.onclick = () => this.goto(t), o
            }, g.updatePath = function() {
                i.innerHTML = "", i.append(this.createPage(this[0][0], 0, 1 == this.length));
                for (let e = 1; e < this.length; e++) i.append(" > "), i.append(this.createPage(this[e][0], e, this.length - 1 == e));
                q.innerHTML = "", q.append(this[this.length - 1][1]), this[this.length - 1][1]?.onPath?.()
            }, g.push = function(e, t) {
                return Array.prototype.push.call(this, [e, t]), this.updatePath(), this.length
            }, g.goto = function(e) {
                for (; this.length - 1 > e;) this.pop();
                this.updatePath()
            }, g.sidebar = function(e, t) {
                for (; 0 < this.length;) this.pop();
                return this.push(e, t)
            };
            a = document.createElement("div");
            a.className = u.leaderboardPage;
            const Y = document.createElement("ul");
            Y.className = u.noScroll + " " + u.leaderboardList, a.append(Y);
            var Q = document.createElement("div");
            Q.className = u.logsPage;
            const X = document.createElement("ul"),
                Z = (X.className = u.noScroll + " " + u.logMessages, document.createElement("div"));
            Z.className = u.clearLogsButton, Z.innerHTML = '<i class="fas fa-ban" style="line-height: 1"></i>', Q.append(X, Z);
            let ee;
            const A = {
                connection: null,
                standings: [],
                data: {},
                gamemodeData: {
                    gold: {
                        sort: "g"
                    },
                    hack: {
                        sort: "cr"
                    },
                    fish: {
                        sort: "w"
                    },
                    pirate: {
                        sort: "d"
                    },
                    defense2: {
                        sort: "d"
                    },
                    brawl: {
                        sort: "xp",
                        upgrades: {
                            egg: "Rapid Eggs",
                            nut: "Crazy Acorns",
                            slime: "Bouncing Slime",
                            jesterBall: "Juggling Spheres",
                            horseshoe: "Revolving Horseshoes",
                            shell: "Rebounding Shell",
                            pizza: "Boomerang Pizza",
                            banana: "Curving Banana",
                            arrow: "Speeding Arrows",
                            peacock: "Peacock Feathers",
                            bone: "Whirling Bones",
                            bee: "Buzzing Bees",
                            bubble: "Booming Bubbles",
                            card: "Slicing Cards",
                            laser: "Rapid-fire Lasers",
                            darkEnergy: "Dark Energy",
                            syrup: "Sticky Syrup",
                            birdFeather: "Flying Feathers"
                        }
                    },
                    dino: {
                        sort: "f"
                    },
                    royale: {
                        sort: "e"
                    },
                    defense: {
                        sort: "d"
                    },
                    cafe: {
                        sort: "ca"
                    },
                    factory: {
                        sort: "ca",
                        glitches: {
                            lb: "Lunch Break",
                            as: "Ad Spam",
                            e37: "Error 37",
                            nt: "Night Time",
                            lo: "#LOL",
                            j: "Jokester",
                            sm: "Slow Mo",
                            dp: "Dance Party",
                            v: "Vortex",
                            r: "Reverse",
                            f: "Flip",
                            m: "Micro"
                        }
                    },
                    racing: {
                        sort: "pr"
                    },
                    rush: {
                        sort: "bs"
                    },
                    classic: {
                        sort: "p"
                    },
                    tower: {},
                    kingdom: {},
                    toy: {
                        sort: "t",
                        sabotages: {
                            c: "Oh Canada",
                            b: "Blizzard",
                            f: "Fog Spell",
                            d: "Dark & Dusk",
                            w: "Howling Wind",
                            g: "Gift Time!",
                            t: "TREES",
                            s: "Snow Plow",
                            fr: "Use The Force"
                        }
                    }
                },
                exponents: ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
                formatNumber(e) {
                    var [t, a] = (e = parseFloat(e)).toLocaleString(void 0, {
                        notation: "engineering"
                    }).toLowerCase().split("e");
                    return a < 15 ? t + ["", "k", "M", "B", "T"][a / 3] : ((
                        [t, a] = e.toLocaleString(void 0, {
                            notation: "scientific"
                        }).toLowerCase().split("e")), t + " × 10" + a.split("").reduce((e, t) => e + A.exponents[t], ""))
                },
                leaderboardCache: {},
                createStandingElement(e) {
                    var t = document.createElement("li"),
                        a = (t.className = u.standing, t.innerText = e, document.createElement("img"));
                    return a.className = u.standingBlook, t.prepend(a), A.leaderboardCache[e] = t
                },
                setLeaderboard(t) {
                    0 < t.length && (ee.style.display = "flex"), Y.innerHTML = "";
                    let a = 1;
                    var o;
                    for (let e = 0; e < t.length; e++) {
                        var n = t[e],
                            r = A.leaderboardCache[n.name] || A.createStandingElement(n.name);
                        r.firstChild.src = (o = A.blookData[A.data[n.name]?.b || "Black"]).url, r.style.setProperty("--standingColor", o.color), r.dataset[h.value] = A.formatNumber(n.value), t[e - 1]?.value != t[e].value && (a = e + 1), r.dataset[h.place] = a, Y.append(r)
                    }
                },
                blookData: null,
                fetchBlooks() {
                    return A.blookData ?? new Promise(a => {
                        var o = document.createElement("iframe"),
                            e = (o.style.display = "none", document.createElement("script")),
                            t = (e.type = "module", e.src = document.querySelector("script[src*='ac.blooket.com']").src + "?" + Date.now(), document.createElement("div"));
                        t.id = "app";
                        let n = {};
                        document.body.appendChild(o);
                        let r;
                        o.contentWindow.Object.prototype.hasOwnProperty.call = function(e, t) {
                            return e[t]?.rarity && e in n == 0 && Object.assign(n, e), r ??= setTimeout(() => {
                                document.body.removeChild(o), a(A.blookData = n)
                            }), Object.prototype.hasOwnProperty.call(e, t)
                        }, o.contentDocument.body.appendChild(t), o.contentDocument.body.appendChild(e)
                    })
                },
                async connect() {
                    try {
                        var e = M();
                        if (!e?.props?.liveGameController?._liveGameCode) return !1;
                        if (A.connection = await e.props.liveGameController.getDatabaseRef("c"), !A.connection) return !1;
                        await A.fetchBlooks();
                        const P = A.getGamemode();
                        return A.connection.on("value", e => {
                            var t, a, o, n, r, s, i, l, c, d, p, m, u, h, g, e = e.val() || {};
                            let f;
                            if (e && (f = A.diffObjects(A.data, e))) {
                                A.data = e, A.gamemodeData[P].sort && (A.standings = Object.entries(e).map(([e, t]) => ({
                                    name: e,
                                    blook: t.b,
                                    value: t[A.gamemodeData[P].sort] || 0
                                })).sort((e, t) => t.value - e.value), A.setLeaderboard(A.standings));
                                try {
                                    let e;
                                    switch (P) {
                                        case "brawl":
                                            for (const y in f)(e = f[y]).up && 2 == (t = e.up.split(":")).length && t[0] in A.gamemodeData.brawl.upgrades && A.addAlert(y, `upgraded ${A.gamemodeData.brawl.upgrades[t[0]]} to level ` + t[1]);
                                            break;
                                        case "gold":
                                            for (const b in f)(e = f[b]).tat && (([a, o] = e.tat.split(":")), "swap" == o ? A.addAlert(b, `just swapped ${document.querySelector("[src*='assets/candy']")?"candy":"gold"} with ` + a) : A.addAlert(b, `just took ${A.formatNumber(parseInt(o))} ${document.querySelector("[src*='assets/candy']")?"candy":"gold"} from ` + a));
                                            break;
                                        case "toy":
                                            for (const v in f)(e = f[v]).s ? A.addAlert(v, `sabotaged with "${A.gamemodeData.toy.sabotages[e.s]}"`) : e.tat && (([n, r] = e.tat.split(":")), "swap" == r ? A.addAlert(v, "just swapped toys with " + n) : A.addAlert(v, `just took ${A.formatNumber(parseInt(r))} toy${1==r?"":"s"} from ` + n));
                                            break;
                                        case "hack":
                                            for (const w in f)(e = f[w]).tat && (([s, i] = e.tat.split(":")), A.addAlert(w, `just took ${A.formatNumber(parseInt(i))} crypto from ` + s));
                                            break;
                                        case "pirate":
                                            for (const k in f)(e = f[k]).tat && (([l, c] = e.tat.split(":")), A.addAlert(k, `just took ${A.formatNumber(parseInt(c))} doubloons from ` + l));
                                            break;
                                        case "defense2":
                                            for (const x in f)(e = f[x]).r && A.addAlert(x, `just completed Round ${e.r}!`);
                                            break;
                                        case "fishing":
                                            for (const S in f)"Frenzy" == (e = f[S]).f ? A.addAlert(S, "just started a frenzy") : e.s && A.addAlert(S, `just sent a ${e.f} distraction`);
                                            break;
                                        case "dino":
                                            for (const C in f)(e = f[C]).tat && (([d, p] = e.tat.split(":")), "true" == p ? A.addAlert(C, `just caught ${d} CHEATING!`) : A.addAlert(C, "investigated " + d));
                                            break;
                                        case "cafe":
                                            for (const T in f)(e = f[T]).up && (([m, u] = e.up.split(":")), u) && A.addAlert(T, `upgraded ${m} to level ` + u);
                                            break;
                                        case "factory":
                                            for (const E in f)(e = f[E]).g ? A.addAlert(E, `activated the ${A.gamemodeData.factory.glitches[e.g]} glitch!`) : e.s ? (([h, g] = e.s.split("-")), A.addAlert(E, `has a ${h} ${g} synergy!`)) : e.t && A.addAlert(E, "now has 10 Blooks!")
                                    }
                                } catch (e) {
                                    console.error(e), A.addLog("Error adding an alert", "red")
                                }
                            }
                        }), !0
                    } catch (e) {
                        return console.warn(e), !1
                    }
                },
                diffObjects(e, t) {
                    var a, o = {};
                    for (const n in e) n in t && ("object" == typeof e[n] && "object" == typeof t[n] ? (a = A.diffObjects(e[n], t[n])) && 0 !== Object.keys(a).length && (o[n] = a) : JSON.stringify(e[n]) !== JSON.stringify(t[n]) && (o[n] = t[n]));
                    for (const r in t) r in e || (o[r] = t[r]);
                    return 0 == Object.keys(o).length ? null : o
                },
                getGamemode() {
                    var e = M().props?.client?.type;
                    if ("string" == typeof e) return e.toLowerCase();
                    switch (window.location.pathname) {
                        case "/play/gold":
                        case "/play/gold/final":
                        case "/gold/play/landing":
                            return "gold";
                        case "/play/hack":
                        case "/play/hack/final":
                        case "/hack/play/landing":
                            return "hack";
                        case "/play/fishing":
                        case "/play/fishing/final":
                        case "/fish/play/landing":
                            return "fish";
                        case "/play/pirate":
                        case "/play/pirate/final":
                        case "/pirate/play/landing":
                            return "pirate";
                        case "/play/defense2/load":
                        case "/play/defense2":
                        case "/play/defense2/final":
                        case "/defense2/play/landing":
                            return "defense2";
                        case "/play/brawl/start":
                        case "/play/brawl/settings":
                        case "/play/brawl":
                        case "/play/brawl/final":
                        case "/brawl/play/landing":
                            return "brawl";
                        case "/play/dino":
                        case "/play/dino/final":
                        case "/dino/play/landing":
                            return "dino";
                        case "/play/battle-royale/match/preview":
                        case "/play/battle-royale/question":
                        case "/play/battle-royale/answer/sent":
                        case "/play/battle-royale/answer/result":
                        case "/play/battle-royale/match/result":
                        case "/play/battle-royale/final":
                        case "/royale/play/landing":
                            return "royale";
                        case "/defense/load":
                        case "/defense":
                        case "/defense/final":
                        case "/defense/play/landing":
                            return "defense";
                        case "/cafe/load":
                        case "/cafe":
                        case "/cafe/shop":
                        case "/cafe/final":
                        case "/cafe/play/landing":
                            return "cafe";
                        case "/play/factory":
                        case "/play/factory/settings":
                        case "/play/factory/start":
                        case "/play/factory/final":
                        case "/factory/play/landing":
                            return "factory";
                        case "/play/racing":
                        case "/play/racing/final":
                        case "/racing/play/landing":
                            return "racing";
                        case "/play/rush":
                        case "/play/rush/final":
                        case "/rush/play/landing":
                            return "rush";
                        case "/play/classic/get-ready":
                        case "/play/classic/question":
                        case "/play/classic/answer/sent":
                        case "/play/classic/answer/result":
                        case "/play/classic/standings":
                        case "/play/classic/final":
                        case "/classic/play/landing":
                            return "classic";
                        case "/tower/load":
                        case "/tower/start":
                        case "/tower/map":
                        case "/tower/battle":
                        case "/tower/rest":
                        case "/tower/risk":
                        case "/tower/shop":
                        case "/tower/victory":
                        case "/tower/final":
                        case "/tower/play/landing":
                            return "tower";
                        case "/kingdom/start":
                        case "/kingdom":
                        case "/kingdom/final":
                        case "/kingdom/play/landing":
                            return "kingdom";
                        case "/play/toy":
                        case "/play/toy/final":
                        case "/toy/play/landing":
                            return "toy"
                    }
                    return ""
                },
                sanitizer: document.createElement("div"),
                sanitizeText(e) {
                    return A.sanitizer.textContent = e, A.sanitizer.innerHTML
                },
                addAlert(e, t) {
                    var a = document.createElement("li"),
                        o = (a.className = u.logMessage, document.createElement("span"));
                    A.lastLog.setTime(Date.now()), o.innerHTML = `<strong>${A.sanitizeText(e)}</strong> ${A.sanitizeText(t)}<span style="opacity: 50%; flex: 1; text-align: right;">${be(A.lastLog)}</span>`, (t = A.blookData?.[A.data[e].b]) && ((e = document.createElement("img")).src = t.url, o.prepend(e)), a.append(o), X.prepend(a)
                },
                lastLog: new Date,
                addLog(e, t) {
                    var a = document.createElement("li"),
                        o = (a.className = u.logMessage, document.createElement("span"));
                    t && (o.style.color = t), o.style.display = "flex", A.lastLog.setTime(Date.now()), o.innerHTML = "[LOG] " + A.sanitizeText(e) + `<span style="opacity: 50%; flex: 1; text-align: right;">${be(A.lastLog)}</span>`, a.append(o), X.prepend(a)
                },
                interval: null
            }, l = ("dashboard.blooket.com" != window.location.host && "blooket.com" != window.location.host && (A.interval = setInterval(() => A.connect().then(e => e && clearInterval(A.interval)), 5e3)), {
                global: {
                    img: "https://ac.blooket.com/dashclassic/assets/Blooket-M6jYh_hk.png",
                    name: "Global",
                    cheats: [{
                        name: "Auto Answer",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: !(Z.onclick = () => {
                            Z.animate([{
                                rotate: "0deg"
                            }, {
                                rotate: "360deg"
                            }], {
                                duration: 750,
                                easing: "ease"
                            }), X.innerHTML = "", A.addLog("Cleared Logs")
                        }),
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e = M(),
                                    o = e.state.question || e.props.client.question;
                                if ("typing" != e.state.question.qType)
                                    if ("feedback" == e.state.stage || e.state.feedback) document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                                    else {
                                        let a;
                                        for (a = 0; a < o.answers.length; a++) {
                                            let t = !1;
                                            for (let e = 0; e < o.correctAnswers.length; e++)
                                                if (o.answers[a] == o.correctAnswers[e]) {
                                                    t = !0;
                                                    break
                                                }
                                            if (t) break
                                        }
                                        document.querySelectorAll("[class*='answerContainer']")[a].click()
                                    }
                                else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(o.answers[0])
                            }, 50))
                        }
                    }, {
                        name: "Highlight Answers",
                        description: "Toggles highlight answers on",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e = M(),
                                    a = e.state.question || e.props.client.question;
                                let o = 0;
                                for (; o < a.answers.length;) {
                                    let t = !1;
                                    for (let e = 0; e < a.correctAnswers.length; e++)
                                        if (a.answers[o] == a.correctAnswers[e]) {
                                            t = !0;
                                            break
                                        }
                                    o++, document.querySelector("[class*='answersHolder'] :nth-child(" + o + ") > div").style.backgroundColor = t ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)"
                                }
                            }, 50))
                        }
                    }, {
                        name: "Subtle Highlight Answers",
                        description: "Toggles subtle highlight answers on",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e = M(),
                                    a = e.state.question || e.props.client.question;
                                let o = 0;
                                for (; o < a.answers.length;) {
                                    let e = 0,
                                        t = !1;
                                    for (; e < a.correctAnswers.length;) {
                                        if (a.answers[o] == a.correctAnswers[e]) {
                                            t = !0;
                                            break
                                        }
                                        e++
                                    }
                                    o++, t && (document.querySelector("[class*='answersHolder'] :nth-child(" + o + ") > div").style.boxShadow = "unset")
                                }
                            }, 50))
                        }
                    }, {
                        name: "Percent Auto Answer",
                        description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
                        inputs: [{
                            name: "Target Grade",
                            type: "number"
                        }],
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function(e) {
                            if (this.enabled) this.enabled = !1, clearInterval(this.data), this.data = null;
                            else {
                                this.enabled = !0;
                                const l = M();
                                this.data = setInterval(a => {
                                    try {
                                        var o = l.state.question || l.props.client.question;
                                        if ("feedback" == l.state.stage || l.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                                        if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                            let e = 0,
                                                t = 0;
                                            for (var n in l.corrects) e += l.corrects[n];
                                            for (var r in l.incorrects) t += l.incorrects[r];
                                            var s = 0 == (t += e) || Math.abs(e / (t + 1) - a) >= Math.abs((e + 1) / (t + 1) - a);
                                            if ("typing" != l.state.question.qType) {
                                                var i = document.querySelectorAll("[class*='answerContainer']");
                                                for (let e = 0; e < i.length; e++)
                                                    if (s == o.correctAnswers.includes(o.answers[e])) return i[e]?.click?.();
                                                i[0].click()
                                            } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(s ? o.answers[0] : Math.random().toString(36).substring(2))
                                        }
                                    } catch {}
                                }, 100, (e ?? 100) / 100)
                            }
                        }
                    }, {
                        name: "Auto Answer",
                        description: "Click the correct answer for you",
                        run: function() {
                            var e = M(),
                                o = e.state.question || e.props.client.question;
                            if ("typing" != e.state.question.qType)
                                if ("feedback" == e.state.stage || e.state.feedback) document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                                else {
                                    let a;
                                    for (a = 0; a < o.answers.length; a++) {
                                        let t = !1;
                                        for (let e = 0; e < o.correctAnswers.length; e++)
                                            if (o.answers[a] == o.correctAnswers[e]) {
                                                t = !0;
                                                break
                                            }
                                        if (t) break
                                    }
                                    document.querySelectorAll("[class*='answerContainer']")[a].click()
                                }
                            else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(o.answers[0])
                        }
                    }, {
                        name: "Highlight Answers",
                        description: "Colors answers to be red or green highlighting the correct ones",
                        run: function() {
                            var e = M(),
                                a = e.state.question || e.props.client.question;
                            let o = 0;
                            for (; o < a.answers.length;) {
                                let t = !1;
                                for (let e = 0; e < a.correctAnswers.length; e++)
                                    if (a.answers[o] == a.correctAnswers[e]) {
                                        t = !0;
                                        break
                                    }
                                o++, document.querySelector("[class*='answersHolder'] :nth-child(" + o + ") > div").style.backgroundColor = t ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)"
                            }
                        }
                    }, {
                        name: "Spam Buy Blooks",
                        description: "Opens a box an amount of times",
                        inputs: [{
                            name: "Box",
                            type: "options",
                            options: () => Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((e, t) => (t.querySelector("[class*='blookContainer'] > img") || e.push(t.querySelector("[class*='packImgContainer'] > img").alt), e), [])
                        }, {
                            name: "Amount",
                            type: "number"
                        }, {
                            name: "Show Unlocks",
                            type: "options",
                            options: [{
                                name: "Show Unlocks",
                                value: !0
                            }, {
                                name: "Don't Show Unlocks",
                                value: !1
                            }]
                        }],
                        run: async function(t, e, a) {
                            if (window.location.pathname.startsWith("/market")) {
                                var o = M(),
                                    n = Array.prototype.reduce.call(document.querySelectorAll("[class*='packsWrapper'] > div"), (e, t) => (t.querySelector("[class*='blookContainer'] > img") || (e[t.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(t.querySelector("[class*='packBottom']").textContent)), e), {})[t = t.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ")];
                                if (!n) return alert("I couldn't find that box!");
                                n = Math.floor(o.state.tokens / n);
                                if (n <= 0) return alert("You do not have enough tokens!");
                                var r = Math.min(n, e || 0),
                                    s = {},
                                    n = Date.now();
                                for (let e = 0; e < r; e++) {
                                    await o.buyPack(!0, t), s[o.state.unlockedBlook] ??= 0, s[o.state.unlockedBlook]++, o.startOpening(), clearTimeout(o.openTimeout);
                                    var i = o.state.purchasedBlookRarity;
                                    if (o.setState({
                                        canOpen: !0,
                                        currentPack: "",
                                        opening: a,
                                        doneOpening: a,
                                        openPack: a
                                    }), clearTimeout(o.canOpenTimeout), "Chroma" == i) break
                                }
                                await new Promise(e => setTimeout(e)), alert(`(${Date.now()-n}ms) Results:\n` + Object.entries(s).map(([e, t]) => `    ${e} ` + t).join(`\n`))
                            } else alert("This can only be ran in the Market page.")
                        }
                    }, {
                        name: "Host Any Gamemode",
                        description: "Change the selected gamemode on the host settings page",
                        inputs: [{
                            name: "Gamemode",
                            type: "options",
                            options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"]
                        }],
                        run: function(e) {
                            if ("/host/settings" != location.pathname) return alert("Run this script on the host settings page");
                            M().setState({
                                settings: {
                                    type: e
                                }
                            })
                        }
                    }, {
                        name: "Change Blook Ingame",
                        description: "Changes your blook",
                        inputs: [{
                            name: "Blook (case sensitive)",
                            type: "string"
                        }],
                        run: function(e) {
                            var t = M()["props"];
                            t.liveGameController.setVal({
                                path: `c/${t.client.name}/b`,
                                val: t.client.blook = e
                            })
                        }
                    }, {
                        name: "Get Daily Rewards",
                        description: "Gets max daily tokens and xp",
                        run: async function() {
                            var e, t, a;
                            window.location.href.includes("play.blooket.com") ? (e = ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(24 * Math.random())], t = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e, a = (await fetch("https://play.blooket.com/api/playersessions/solo", {
                                body: JSON.stringify({
                                    gameMode: "Factory",
                                    questionSetId: e
                                }),
                                method: "POST",
                                credentials: "include"
                            }).then(e => e.json()).catch(() => alert("There was an error creating a solo game.")))["t"], await fetch("https://play.blooket.com/api/playersessions/landings", {
                                body: JSON.stringify({
                                    t: a
                                }),
                                method: "POST",
                                credentials: "include"
                            }).catch(() => alert("There was an error when landing.")), await fetch("https://play.blooket.com/api/playersessions/questions?t=" + a, {
                                credentials: "include"
                            }), await fetch("https://play.blooket.com/api/gamequestionsets?gameId=" + e, {
                                credentials: "include"
                            }), await fetch("https://play.blooket.com/api/users/factorystats", {
                                body: JSON.stringify({
                                    t: a,
                                    place: 1,
                                    cash: t(1e7, 1e8),
                                    playersDefeated: 0,
                                    correctAnswers: t(500, 2e3),
                                    upgrades: t(250, 750),
                                    blookUsed: "Chick",
                                    nameUsed: "You",
                                    mode: "Time-Solo"
                                }),
                                method: "PUT",
                                credentials: "include"
                            }).catch(() => alert("There was an error when spoofing stats.")), await fetch("https://play.blooket.com/api/users/add-rewards", {
                                body: JSON.stringify({
                                    t: a,
                                    addedTokens: 500,
                                    addedXp: 300
                                }),
                                method: "PUT",
                                credentials: "include"
                            }).then(e => e.json()).then(({
                                dailyReward: e
                            }) => alert(`Added max tokens and xp, and got ${e} daily wheel tokens!`)).catch(() => alert("There was an error when adding rewards."))) : (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"))
                        }
                    }, {
                        name: "Use Any Blook",
                        description: "Allows you to play as any blook",
                        run: function() {
                            var e = window.location.pathname.startsWith("/play/lobby");
                            if (!e && window.location.pathname.startsWith("/blooks")) {
                                let t = "konzpack",
                                    a = Object.prototype.hasOwnProperty.call;
                                var o = webpackChunk_N_E.push([[t], {}, function(e) {
                                    return Object.prototype.hasOwnProperty.call = function() {
                                        return Object.defineProperty(arguments[0], t, {
                                            set: () => {},
                                            configurable: !0
                                        }), (Object.prototype.hasOwnProperty.call = a).apply(this, arguments)
                                    }, e
                                }])(4927).nK;
                                const i = Object.values(document.querySelector("[class*=BlooksWrapper_content]"))[0].return.memoizedState.next,
                                    l = i.memoizedState;
                                var n = {},
                                    r = [],
                                    s = {
                                        Uncommon: 5,
                                        Rare: 20,
                                        Epic: 75,
                                        Legendary: 200,
                                        Chroma: 300,
                                        Unique: 350,
                                        Mystical: 1e3
                                    };
                                for (const c of i.next.memoizedState) r.push(c), n[c.blook] = !0;
                                for (const d in o) "Common" == o[d].rarity || n[d] || r.push({
                                    blook: d,
                                    quantity: 1,
                                    sellPrice: s[o[d].rarity]
                                });
                                i.next.queue.dispatch(r), i.queue.dispatch(!l), setTimeout(() => i.queue.dispatch(l), 1)
                            } else e ? M().setState({
                                unlocks: {
                                    includes: () => !0
                                }
                            }) : alert("This only works in lobbies or the dashboard blooks page.")
                        }
                    }, {
                        name: "Every Answer Correct",
                        description: "Sets every answer to be correct",
                        run: function() {
                            var t = M();
                            for (let e = 0; e < t.freeQuestions.length; e++) t.freeQuestions[e].correctAnswers = t.freeQuestions[e].answers, t.questions[e].correctAnswers = t.questions[e].answers, t.props.client.questions[e].correctAnswers = t.questions[e].answers;
                            try {
                                t.forceUpdate()
                            } catch {}
                        }
                    }, {
                        name: "Subtle Highlight Answers",
                        description: "Removes the shadow from correct answers",
                        run: function() {
                            var e = M(),
                                a = e.state.question || e.props.client.question;
                            let o = 0;
                            for (; o < a.answers.length;) {
                                let e = 0,
                                    t = !1;
                                for (; e < a.correctAnswers.length;) {
                                    if (a.answers[o] == a.correctAnswers[e]) {
                                        t = !0;
                                        break
                                    }
                                    e++
                                }
                                o++, t && (document.querySelector("[class*='answersHolder'] :nth-child(" + o + ") > div").style.boxShadow = "unset")
                            }
                        }
                    }, {
                        name: "Remove Random Name",
                        description: "Allows you to put a custom name",
                        run: function() {
                            M().setState({
                                isRandom: !1,
                                client: {
                                    name: ""
                                }
                            }), document.querySelector('[class*="nameInput"]')?.focus?.()
                        }
                    }, {
                        name: "Sell Duplicate Blooks",
                        description: "Sell all duplicate blooks leaving you with 1 each",
                        run: async function() {
                            if (window.location.pathname.startsWith("/blooks")) {
                                if (confirm("Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)")) {
                                    var a = M();
                                    let e = Date.now(),
                                        t = "";
                                    for (const o in a.state.blookData)
                                        if (1 < a.state.blookData[o]) {
                                            if (a.setState({
                                                blook: o,
                                                numToSell: a.state.blookData[o] - 1
                                            }), !["Uncommon", "Rare", "Epic"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim())) continue;
                                            t += `    ${o} ${a.state.blookData[o]-1}\n`, await a.sellBlook({
                                                preventDefault: () => {}
                                            }, !0)
                                        }
                                    alert(`(${Date.now()-e}ms) Results:\n` + t.trim())
                                }
                            } else alert("This can only be ran in the Blooks page.")
                        }
                    }]
                },
                gold: {
                    img: 9 == (new Date).getMonth() ? "https://media.blooket.com/image/upload/v1663212881/Media/logos/Candy_Quest_Logo.png" : "https://media.blooket.com/image/upload/v1663212881/Media/logos/Gold_Quest_Logo_Resized.png",
                    name: "Gold Quest",
                    cheats: [{
                        name: "Always Triple",
                        description: "Always get triple gold",
                        type: "toggle",
                        enabled: !1,
                        data: {
                            type: "multiply",
                            val: 3,
                            text: "Triple Gold!",
                            blook: "Unicorn"
                        },
                        run: function() {
                            let t = M();
                            t._choosePrize ||= t.choosePrize, this.enabled ? (this.enabled = !1, t._choosePrize && (t.choosePrize = t._choosePrize)) : (this.enabled = !0, t.choosePrize = e => {
                                t.state.choices[e] = this.data, t._choosePrize(e)
                            })
                        }
                    }, {
                        name: "Auto Choose",
                        description: "Automatically picks the option that would give you the most gold",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(async() => {
                                let s = M();
                                "prize" == s.state.stage && s.props.liveGameController.getDatabaseVal("c", t => {
                                    try {
                                        if (null != t) {
                                            t = Object.entries(t);
                                            let a = 0,
                                                o = 0,
                                                n = -1;
                                            for (let e = 0; e < t.length; e++) t[e][0] != s.props.client.name && t[e][1] > a && (a = t[e][1]);
                                            for (let t = 0; t < s.state.choices.length; t++) {
                                                var r = s.state.choices[t];
                                                let e = s.state.gold;
                                                "gold" == r.type ? e = s.state.gold + r.val || s.state.gold : "multiply" == r.type || "divide" == r.type ? e = Math.round(s.state.gold * r.val) || s.state.gold : "swap" == r.type ? e = a || s.state.gold : "take" == r.type && (e = s.state.gold + a * r.val || s.state.gold), (e || 0) <= o || (o = e, n = t + 1)
                                            }
                                            document.querySelector("div[class*='choice" + n + "']")?.click()
                                        }
                                    } catch {}
                                })
                            }, 50))
                        }
                    }, {
                        name: "Chest ESP",
                        description: "Shows what each chest will give you",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                M().state.choices.forEach(({
                                    text: e
                                }, t) => {
                                    var a, t = document.querySelector(`div[class*='choice${t+1}']`);
                                    t && !t.querySelector("div") && ((a = document.createElement("div")).style.color = "var(--textColor)", a.style.fontFamily = "Eczar", a.style.fontSize = "2em", a.style.display = "flex", a.style.justifyContent = "center", a.style.transform = "translateY(200px)", a.innerText = e, t.append(a))
                                })
                            }, 50))
                        }
                    }, {
                        name: "Remove Bad Choices",
                        description: "Removes the chance of getting Lose 25%, Lose 50%, and Nothing",
                        run: function() {
                            let e = Array.prototype[Symbol.iterator];
                            Array.prototype[Symbol.iterator] = function*() {
                                if ("gold" == this[0]?.type) {
                                    Array.prototype[Symbol.iterator] = e, console.log(this);
                                    for (let e = 0; e < this.length; e++) "divide" != this[e].type && "nothing" != this[e].type || this.splice(e--, 1)
                                }
                                yield* e.apply(this)
                            }, M().constructor.prototype.answerNext.call({
                                nextReady: !0,
                                here: !0,
                                state: {
                                    correct: !0
                                },
                                setState() {}
                            })
                        }
                    }, {
                        name: "Reset Players Gold",
                        description: "Sets a player's gold to 0",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let e = M();
                                return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                            }
                        }],
                        run: function(e) {
                            var t = M();
                            t.props.liveGameController.setVal({
                                path: "c/" + t.props.client.name + "/tat",
                                val: e + ":swap:0"
                            })
                        }
                    }, {
                        name: "Set Gold",
                        description: "Sets amount of gold",
                        inputs: [{
                            name: "Gold",
                            type: "number"
                        }],
                        run: function(e) {
                            var t = M();
                            t.setState({
                                gold: e,
                                gold2: e
                            }), t.props.liveGameController.setVal({
                                path: "c/" + t.props.client.name + "/g",
                                val: e
                            })
                        }
                    }, {
                        name: "Set Player's Gold",
                        description: "Sets another player's gold",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let e = M();
                                return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                            }
                        }, {
                            name: "Gold",
                            type: "number"
                        }],
                        run: function(e, t) {
                            var a = M();
                            a.props.liveGameController.setVal({
                                path: "c/" + a.props.client.name + "/tat",
                                val: e + ":swap:" + t
                            })
                        }
                    }, {
                        name: "Swap Gold",
                        description: "Swaps gold with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let e = M();
                                return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                            }
                        }],
                        run: function(t) {
                            let a = M();
                            a.props.liveGameController.getDatabaseVal("c", e => {
                                e && null != e[t] && (e = e[t].g || 0, a.props.liveGameController.setVal({
                                    path: "c/" + a.props.client.name,
                                    val: {
                                        b: a.props.client.blook,
                                        tat: t + ":swap:" + (a.state.gold || 0),
                                        g: e
                                    }
                                }), a.setState({
                                    gold: e,
                                    gold2: e
                                }))
                            })
                        }
                    }]
                },
                hack: {
                    img: "https://media.blooket.com/image/upload/v1663212882/Media/logos/Crypto_Hack_Logo_Resized.png",
                    name: "Crypto Hack",
                    cheats: [{
                        name: "Choice ESP",
                        description: "Shows what each choice will give you",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e, t = document.querySelector("[class*=feedbackContainer]");
                                t.children.length <= 4 && ((e = document.createElement("div")).style.color = "var(--textColor)", e.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif", e.style.fontSize = "2em", e.style.display = "flex", e.style.justifyContent = "center", e.style.marginTop = "675px", e.innerText = M().state.choices[0].text, t.append(e))
                            }, 50))
                        }
                    }, {
                        name: "Password ESP",
                        description: "Highlights the correct password",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e = M()["state"];
                                if ("hack" == e.stage)
                                    for (const t of document.querySelector("div[class*=buttonContainer]").children) t.innerText != e.correctPassword && (t.style.outlineColor = "rgba(255, 64, 64, 0.8)", t.style.backgroundColor = "rgba(255, 64, 64, 0.8)", t.style.textShadow = "0 0 1px #f33")
                            }, 50))
                        }
                    }, {
                        name: "Always Triple",
                        description: "Always get triple crypto",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(e => M().setState(e), 25, {
                                choices: [{
                                    type: "mult",
                                    val: 3,
                                    rate: .075,
                                    blook: "Brainy Bot",
                                    text: "Triple Crypto"
                                }]
                            }))
                        }
                    }, {
                        name: "Auto Guess",
                        description: "Automatically guess the correct password",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e = M()["state"];
                                if ("hack" == e.stage)
                                    for (const t of document.querySelector("div[class*=buttonContainer]").children) t.innerText == e.correctPassword && t.click()
                            }, 50))
                        }
                    }, {
                        name: "Remove Hack",
                        description: "Removes an attacking hack",
                        run: function() {
                            M().setState({
                                hack: ""
                            })
                        }
                    }, {
                        name: "Set Crypto",
                        description: "Sets crypto",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function(e) {
                            var t = M();
                            t.setState({
                                crypto: e,
                                crypto2: e
                            }), t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/cr`,
                                val: e
                            })
                        }
                    }, {
                        name: "Set Password",
                        description: "Sets hacking password",
                        inputs: [{
                            name: "Custom Password",
                            type: "string"
                        }],
                        run: function(e) {
                            var t = M();
                            t.setState({
                                password: e
                            }), t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/p`,
                                val: e
                            })
                        }
                    }, {
                        name: "Steal Player's Crypto",
                        description: "Steals all of someone's crypto",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let e = M();
                                return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                            }
                        }],
                        run: function(a) {
                            let o = M();
                            o.props.liveGameController.getDatabaseVal("c", e => {
                                let t;
                                e && (t = Object.entries(e).find(e => e[0].toLowerCase() == a.toLowerCase())) && (e = t[1].cr, o.setState({
                                    crypto: o.state.crypto + e,
                                    crypto2: o.state.crypto + e
                                }), o.props.liveGameController.setVal({
                                    path: "c/" + o.props.client.name,
                                    val: {
                                        b: o.props.client.blook,
                                        p: o.state.password,
                                        cr: o.state.crypto + e,
                                        tat: t[0] + ":" + e
                                    }
                                }))
                            })
                        }
                    }]
                },
                fish: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Fishing_Frenzy_Logo_Resized.png",
                    name: "Fishing Frenzy",
                    cheats: [{
                        name: "Remove Distractions",
                        description: "Removes distractions",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                M().setState({
                                    party: ""
                                })
                            }, 50))
                        }
                    }, {
                        name: "Frenzy",
                        description: "Sets everyone to frenzy mode",
                        run: function() {
                            var e = M();
                            e.props.liveGameController.setVal({
                                path: "c/" + e.props.client.name,
                                val: {
                                    b: e.props.client.blook,
                                    w: e.state.weight,
                                    f: "Frenzy",
                                    s: !0
                                }
                            })
                        }
                    }, {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"]
                        }],
                        run: function(e) {
                            var t = M();
                            t.safe = !0, t.props.liveGameController.setVal({
                                path: "c/" + t.props.client.name,
                                val: {
                                    b: t.props.client.blook,
                                    w: t.state.weight,
                                    f: e,
                                    s: !0
                                }
                            })
                        }
                    }, {
                        name: "Set Lure",
                        description: "Sets fishing lure (range 1 - 5)",
                        inputs: [{
                            name: "Lure (1 - 5)",
                            type: "number",
                            min: 1,
                            max: 5
                        }],
                        run: function(e) {
                            M().setState({
                                lure: Math.max(Math.min(e - 1, 4), 0)
                            })
                        }
                    }, {
                        name: "Set Weight",
                        description: "Sets weight",
                        inputs: [{
                            name: "Weight",
                            type: "number"
                        }],
                        run: function(e) {
                            var t = M();
                            t.setState({
                                weight: e,
                                weight2: e
                            }), t.props.liveGameController.setVal({
                                path: "c/" + t.props.client.name,
                                val: {
                                    b: t.props.client.blook,
                                    w: e,
                                    f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())]
                                }
                            })
                        }
                    }]
                },
                pirate: {
                    img: "https://media.blooket.com/image/upload/v1695317816/Media/logos/PiratesVoyageLogoSmall.png",
                    name: "Pirate's Voyage",
                    cheats: [{
                        name: "Heist ESP",
                        description: "Shows you what's under each chest during a heist",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        imgs: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e = M();
                                if ("heist" == e.state.stage) {
                                    null == this.imgs && (this.imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), e => e.querySelector("img").src));
                                    const n = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
                                    for (const t of document.querySelectorAll("[class*=boxContent] > div")) t.remove();
                                    const r = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
                                    Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (e, t) => {
                                        const a = e.firstChild.firstChild;
                                        if (r.includes(t)) return a.style.opacity = "";
                                        a.style.opacity = "0.5";
                                        let o = document.createElement("div");
                                        o.innerHTML = "<img src='" + this.imgs[2 - n[t]] + "' style='max-width: 75%; max-height: 75%'></img>", o.className = "chestESP", o.style.position = "absolute", o.style.inset = "0", o.style.display = "grid", o.style.placeItems = "center", o.style.pointerEvents = "none", e.onclick = () => {
                                            o.remove(), a.style.opacity = ""
                                        }, e.firstChild.prepend(o)
                                    })
                                }
                            }, 50))
                        }
                    }, {
                        name: "Max Levels",
                        description: "Maxes out all islands and your boat",
                        run: function() {
                            var e = M();
                            e.setState({
                                islandLevels: new Array(e.state.islandLevels.length).fill(5)
                            }, e.updateBoatLevel)
                        }
                    }, {
                        name: "Set Doubloons",
                        description: "Sets Doubloons",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function(e) {
                            var t = M();
                            t.setState({
                                doubloons: e
                            }), t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/d`,
                                val: e
                            })
                        }
                    }, {
                        name: "Start Heist",
                        description: "Starts a heist on someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let e = M();
                                return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                            }
                        }],
                        run: function(t) {
                            let a = M();
                            a.props.liveGameController.getDatabaseVal("c", function(e) {
                                e?.[t] && a.setState({
                                    stage: "heist",
                                    heistInfo: {
                                        name: t,
                                        blook: e[t].b
                                    },
                                    prizeAmount: Math.max(1e3, e[t].d || 0)
                                })
                            })
                        }
                    }, {
                        name: "Swap Doubloons",
                        description: "Swaps Doubloons with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let e = M();
                                return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                            }
                        }],
                        run: async function(t) {
                            let a = M();
                            a.props.liveGameController.getDatabaseVal("c", function(e) {
                                e?.[t] && (a.props.liveGameController.setVal({
                                    path: "c/" + a.props.client.name,
                                    val: {
                                        b: a.props.client.blook,
                                        d: e[t].d,
                                        tat: t + ":" + (e[t].d - a.state.doubloons)
                                    }
                                }), a.setState({
                                    doubloons: e[t].d
                                }))
                            })
                        }
                    }, {
                        name: "Take Doubloons",
                        description: "Takes Doubloons from someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let e = M();
                                return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                            }
                        }],
                        run: function(t) {
                            let a = M();
                            a.props.liveGameController.getDatabaseVal("c", function(e) {
                                e?.[t] && (a.props.liveGameController.setVal({
                                    path: "c/" + a.props.client.name,
                                    val: {
                                        b: a.props.client.blook,
                                        d: a.state.doubloons + e[t].d,
                                        tat: t + ":" + e[t].d
                                    }
                                }), a.setState({
                                    doubloons: a.state.doubloons + e[t].d
                                }))
                            })
                        }
                    }]
                },
                defense2: {
                    img: "https://media.blooket.com/image/upload/v1676079918/Media/logos/Tower_Defense_2_Logo_Resize.png",
                    name: "Tower Defense 2",
                    cheats: [{
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function() {
                            M().state.towers.forEach(e => {
                                if (e.stats.dmg = 1e6, e.stats.fireRate = 50, e.stats.ghostDetect = !0, e.stats.maxTargets = 1e6, e.stats.numProjectiles &&= 100, e.stats.range = 100, e.stats.auraBuffs)
                                    for (const t in e.stats.auraBuffs) e.stats.auraBuffs[t] *= 100
                            })
                        }
                    }, {
                        name: "Kill Enemies",
                        description: "Kills all the enemies",
                        run: function() {
                            var e = M();
                            e.game.current.config.sceneConfig.enemyQueue.length = 0, e.game.current.config.sceneConfig.physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
                        }
                    }, {
                        name: "Set Coins",
                        description: "Sets coins",
                        inputs: [{
                            name: "Coins",
                            type: "number"
                        }],
                        run: function(e) {
                            M().setState({
                                coins: e
                            })
                        }
                    }, {
                        name: "Set Health",
                        description: "Sets the amount of health you have",
                        inputs: [{
                            name: "Health",
                            type: "number"
                        }],
                        run: function(e) {
                            M().setState({
                                health: e
                            })
                        }
                    }, {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number"
                        }],
                        run: function(e) {
                            M().setState({
                                round: e
                            })
                        }
                    }]
                },
                brawl: {
                    img: "https://media.blooket.com/image/upload/v1663366470/Media/logos/Monster_Brawl_270x156_1.png",
                    name: "Monster Brawl",
                    cheats: [{
                        name: "Double Enemy XP",
                        description: "Doubles enemy XP drop value",
                        run: function() {
                            var a = M().game.current.config.sceneConfig.physics.world.colliders._active.filter(e => e.callbackContext?.toString?.()?.includes?.("dmgCd"));
                            for (let t = 0; t < a.length; t++) {
                                var o = a[t].object2;
                                let e = o.classType.prototype.start;
                                o.classType.prototype.start = function() {
                                    e.apply(this, arguments), this.val *= 2
                                }, o.children.entries.forEach(e => e.val *= 2)
                            }
                        }
                    }, {
                        name: "Half Enemy Speed",
                        description: "Makes enemies move 2x slower",
                        run: function() {
                            var a = M().game.current.config.sceneConfig.physics.world.colliders._active.filter(e => e.callbackContext?.toString?.()?.includes?.("dmgCd"));
                            for (let t = 0; t < a.length; t++) {
                                var o = a[t].object2;
                                let e = o.classType.prototype.start;
                                o.classType.prototype.start = function() {
                                    e.apply(this, arguments), this.speed *= .5
                                }, o.children.entries.forEach(e => e.speed *= .5)
                            }
                        }
                    }, {
                        name: "Instant Kill",
                        description: "Sets all enemies health to 1",
                        run: function() {
                            var a = M().game.current.config.sceneConfig.physics.world.colliders._active.filter(e => e.callbackContext?.toString?.()?.includes?.("dmgCd"));
                            for (let t = 0; t < a.length; t++) {
                                var o = a[t].object2;
                                let e = o.classType.prototype.start;
                                o.classType.prototype.start = function() {
                                    e.apply(this, arguments), this.hp = 1
                                }, o.children.entries.forEach(e => e.hp = 1)
                            }
                        }
                    }, {
                        name: "Invincibility",
                        description: "Makes you invincible",
                        run: function() {
                            for (const e of M().game.current.config.sceneConfig.physics.world.colliders._active.filter(e => e.collideCallback?.toString().includes("invulnerableTime") || e.collideCallback?.toString().includes("dmgCd"))) e.collideCallback = () => {}
                        }
                    }, {
                        name: "Kill Enemies",
                        description: "Kills all current enemies",
                        run: function() {
                            M().game.current.config.sceneConfig.physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
                        }
                    }, {
                        name: "Magnet",
                        description: "Pulls all xp towards you",
                        run: function() {
                            M().game.current.config.sceneConfig.physics.world.colliders._active.find(e => e.collideCallback?.toString().includes("magnetTime")).collideCallback({
                                active: !0
                            }, {
                                active: !0,
                                setActive() {},
                                setVisible() {}
                            })
                        }
                    }, {
                        name: "Max Current Abilities",
                        description: "Maxes out all your current abilities",
                        run: function() {
                            const a = M();
                            for (var [t, o] of Object.entries(a.state.abilities))
                                for (let e = 0; e < 10 - o; e++) a.game.current.config.sceneConfig.game.events.emit("level up", t, a.state.abilities[t]++);
                            a.setState({
                                level: a.game.current.config.sceneConfig.level = [1, 3, 5, 10, 15, 25, 35].sort((e, t) => Math.abs(e - a.state.level) - Math.abs(t - a.state.level))[0] - 1
                            })
                        }
                    }, {
                        name: "Next Level",
                        description: "Skips to the next level",
                        run: function() {
                            var e = M(), {
                                    object1: t,
                                    object2: a
                                } = e.game.current.config.sceneConfig.physics.world.colliders._active.find(e => e.collideCallback?.toString().includes('emit("xp'));
                            a.get().spawn(t.x, t.y, (1 === (a = e.state.level) ? 1 : a < 5 ? 5 : a < 10 ? 10 : a < 20 ? 20 : a < 30 ? 30 : a < 40 ? 40 : a < 50 ? 50 : 100) - e.xp)
                        }
                    }, {
                        name: "Remove Obstacles",
                        description: "Removes all rocks and obstacles",
                        run: function() {
                            M().game.current.config.sceneConfig.physics.world.bodies.entries.forEach(e => {
                                try {
                                    e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy()
                                } catch {}
                            })
                        }
                    }, {
                        name: "Reset Health",
                        description: "Resets health and gives invincibility for 3 seconds",
                        run: function() {
                            M().game.current.events._events.respawn.fn()
                        }
                    }]
                },
                dino: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Deceptive_Dinos_Logo_Resized.png",
                    name: "Deceptive Dinos",
                    cheats: [{
                        name: "Auto Choose",
                        description: "Automatically choose the best fossil when excavating",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        rand(o, e) {
                            for (var n = []; n.length < e;) {
                                var r = Math.random();
                                let t = 0,
                                    a = null;
                                for (let e = 0; e < o.length; e++)
                                    if ((t += o[e].rate) >= r) {
                                        a = o[e];
                                        break
                                    }
                                a && !n.includes(a) && n.push(a)
                            }
                            return n
                        },
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                try {
                                    var o = M();
                                    if ("excavate" === o.state.stage) {
                                        o.state.choices.length || (o.state.choices = this.rand([{
                                            type: "fossil",
                                            val: 10,
                                            rate: .1,
                                            blook: "Amber"
                                        }, {
                                            type: "fossil",
                                            val: 25,
                                            rate: .1,
                                            blook: "Dino Egg"
                                        }, {
                                            type: "fossil",
                                            val: 50,
                                            rate: .175,
                                            blook: "Dino Fossil"
                                        }, {
                                            type: "fossil",
                                            val: 75,
                                            rate: .175,
                                            blook: "Stegosaurus"
                                        }, {
                                            type: "fossil",
                                            val: 100,
                                            rate: .15,
                                            blook: "Velociraptor"
                                        }, {
                                            type: "fossil",
                                            val: 125,
                                            rate: .125,
                                            blook: "Brontosaurus"
                                        }, {
                                            type: "fossil",
                                            val: 250,
                                            rate: .075,
                                            blook: "Triceratops"
                                        }, {
                                            type: "fossil",
                                            val: 500,
                                            rate: .025,
                                            blook: "Tyrannosaurus Rex"
                                        }, {
                                            type: "mult",
                                            val: 1.5,
                                            rate: .05
                                        }, {
                                            type: "mult",
                                            val: 2,
                                            rate: .025
                                        }], 3));
                                        let t = 0,
                                            a = -1;
                                        for (let e = 0; e < o.state.choices.length; e++) {
                                            var {
                                                type: n,
                                                val: r
                                            } = o.state.choices[e], s = ("fossil" == n ? o.state.fossils + r * o.state.fossilMult : o.state.fossils * r) || 0;
                                            s <= t && "mult" != n || (t = s, a = e + 1)
                                        }
                                        document.querySelector('div[class*=rockRow] > div[role="button"]:nth-child(' + a + ")").click()
                                    }
                                } catch {}
                            }, 50))
                        }
                    }, {
                        name: "Rock ESP",
                        description: "Shows what is under the rocks",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: (() => {
                            const a = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
                                r = e => {
                                    let t = "";
                                    for (; 0 < e;) t = a[e % 10] + t, e = ~~(e / 10);
                                    return t
                                };
                            return function() {
                                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                    let o = M();
                                    const e = document.querySelector('[class*="rockButton"]').parentElement.children;
                                    Array.prototype.every.call(e, e => e.querySelector("div")) || o.setState({
                                        choices: function(o, e) {
                                            for (var n = []; n.length < e;) {
                                                var r = Math.random();
                                                let t = 0,
                                                    a;
                                                for (let e = 0; e < o.length; e++)
                                                    if ((t += o[e].rate) >= r) {
                                                        a = o[e];
                                                        break
                                                    }
                                                a && !n.includes(a) && n.push(a)
                                            }
                                            return n
                                        }([{
                                            type: "fossil",
                                            val: 10,
                                            rate: .1,
                                            blook: "Amber"
                                        }, {
                                            type: "fossil",
                                            val: 25,
                                            rate: .1,
                                            blook: "Dino Egg"
                                        }, {
                                            type: "fossil",
                                            val: 50,
                                            rate: .175,
                                            blook: "Dino Fossil"
                                        }, {
                                            type: "fossil",
                                            val: 75,
                                            rate: .175,
                                            blook: "Stegosaurus"
                                        }, {
                                            type: "fossil",
                                            val: 100,
                                            rate: .15,
                                            blook: "Velociraptor"
                                        }, {
                                            type: "fossil",
                                            val: 125,
                                            rate: .125,
                                            blook: "Brontosaurus"
                                        }, {
                                            type: "fossil",
                                            val: 250,
                                            rate: .075,
                                            blook: "Triceratops"
                                        }, {
                                            type: "fossil",
                                            val: 500,
                                            rate: .025,
                                            blook: "Tyrannosaurus Rex"
                                        }, {
                                            type: "mult",
                                            val: 1.5,
                                            rate: .05
                                        }, {
                                            type: "mult",
                                            val: 2,
                                            rate: .025
                                        }], 3)
                                    }, () => {
                                        Array.prototype.forEach.call(e, (e, t) => {
                                            var t = o.state.choices[t],
                                                a = (e.querySelector("div") && e.querySelector("div").remove(), document.createElement("div"));
                                            a.style.color = "var(--textColor)", a.style.fontFamily = "Macondo", a.style.fontSize = "1em", a.style.display = "flex", a.style.justifyContent = "center", a.style.transform = "translateY(25px)", a.innerText = "fossil" === t.type ? `+${99999999<Math.round(t.val*o.state.fossilMult)?function(a){let o=a.toString();if(1e3<=a){var e=["","K","M","B","T"],n=Math.floor(Math.floor((Math.log(a)/Math.log(10)).toPrecision(14))/3);if(n<e.length){let t="";for(let e=3;1<=e;e--)if((t=parseFloat((0!=n?a/Math.pow(1e3,n):a).toPrecision(e)).toString()).replace(/[^a-zA-Z 0-9]+/g,"").length<=3)break;Number(t)% 1!=0&&(t=Number(t).toFixed(1)),o=t+e[n]}else{let e=a,t=0;for(;100<=e;)e=Math.floor(e/10),t+=1;o=e/10+" × 10"+r(t+1)}}return o}(Math.round(t.val*o.state.fossilMult)):Math.round(t.val*o.state.fossilMult)} Fossils` : `x${t.val} Fossils Per Excavation`, e.append(a)
                                        })
                                    })
                                }, 50))
                            }
                        })(),
                    }, {
                        name: "Set Fossils",
                        description: "Sets the amount of fossils you have",
                        inputs: [{
                            name: "Fossils",
                            type: "number"
                        }],
                        run: function(e) {
                            var t = M();
                            t.setState({
                                fossils: e
                            }), t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/f`,
                                val: e
                            })
                        }
                    }, {
                        name: "Set Multiplier",
                        description: "Sets fossil multiplier",
                        inputs: [{
                            name: "Multiplier",
                            type: "number"
                        }],
                        run: function(e) {
                            M().setState({
                                fossilMult: e
                            })
                        }
                    }, {
                        name: "Stop Cheating",
                        description: "Undoes cheating so that you can't be caught",
                        run: function() {
                            var e = M();
                            e.setState({
                                isCheating: !1
                            }), e.props.liveGameController.setVal({
                                path: `c/${e.props.client.name}/ic`,
                                val: !1
                            })
                        }
                    }]
                },
                royale: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Battle_Royale_Logo_Resized.png",
                    name: "Battle Royale",
                    cheats: [{
                        name: "Auto Answer (Toggle)",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e = M();
                                e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                            }, 50))
                        }
                    }, {
                        name: "Auto Answer",
                        description: "Chooses the correct answer for you",
                        run: function() {
                            var e = M();
                            e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                        }
                    }]
                },
                defense: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Tower_Defense_Logo_Resized.png",
                    name: "Tower Defense",
                    cheats: [{
                        name: "Earthquake",
                        description: "Shuffles around towers",
                        run: function() {
                            let o = M(),
                                n = (o.setState({
                                    eventName: "Earthquake",
                                    event: {
                                        short: "e",
                                        color: "#805500",
                                        icon: "fas fa-mountain",
                                        desc: "All of your towers get mixed up",
                                        rate: .02
                                    },
                                    buyTowerName: "",
                                    buyTower: {}
                                }, () => o.eventTimeout = setTimeout(() => o.setState({
                                    event: {},
                                    eventName: ""
                                }), 6e3)), o.tiles.forEach(a => a.forEach((e, t) => 3 == e && (a[t] = 0))), []);
                            for (let t = 0; t < o.tiles.length; t++)
                                for (let e = 0; e < o.tiles[t].length; e++) 0 == o.tiles[t][e] && n.push({
                                    x: e,
                                    y: t
                                });
                            n.sort(() => Math.random() - Math.random()), o.towers.forEach(e => {
                                var {
                                    x: t,
                                    y: a
                                } = n.pop();
                                e.move(t, a, o.tileSize), o.tiles[a][t] = 3
                            })
                        }
                    }, {
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function() {
                            M().towers.forEach(e => {
                                e.range = 100, e.fullCd = e.cd = 0, e.damage = 1e6
                            })
                        }
                    }, {
                        name: "Remove Ducks",
                        description: "Removes ducks",
                        run: function() {
                            let {
                                ducks: e,
                                tiles: t
                            } = M();
                            e.forEach(e => t[e.y][e.x] = 0), e.length = 0
                        }
                    }, {
                        name: "Remove Enemies",
                        description: "Removes all the enemies",
                        run: function() {
                            var e = M();
                            e.enemies = e.futureEnemies = []
                        }
                    }, {
                        name: "Remove Obstacles",
                        description: "Lets you place towers anywhere",
                        run: function() {
                            var e = M();
                            e.tiles = e.tiles.map(e => e.fill(0))
                        }
                    }, {
                        name: "Set Damage",
                        description: "Sets damage",
                        inputs: [{
                            name: "Damage",
                            type: "number"
                        }],
                        run: function(e) {
                            M().dmg = e
                        }
                    }, {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number"
                        }],
                        run: function(e) {
                            M().setState({
                                round: e
                            })
                        }
                    }, {
                        name: "Set Tokens",
                        description: "Sets the amount of tokens you have",
                        inputs: [{
                            name: "Tokens",
                            type: "number"
                        }],
                        run: function(e) {
                            M().setState({
                                tokens: e
                            })
                        }
                    }]
                },
                cafe: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Cafe_Logo_Resized.png",
                    name: "Café",
                    cheats: [{
                        name: "Max Items",
                        description: "Maxes out items in the shop (Only usable in the shop)",
                        run: function() {
                            var e;
                            "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = M()).setState({
                                items: Object.keys(e.state.items).reduce((e, t) => (e[t] = 5, e), {})
                            })
                        }
                    }, {
                        name: "Remove Customers",
                        description: "Skips the current customers (Not usable in the shop)",
                        run: function() {
                            const a = M();
                            a.state.customers.forEach((e, t) => window.setTimeout(() => e.blook && a.removeCustomer(t, !0), 250 * t))
                        }
                    }, {
                        name: "Reset Abilities",
                        description: "Resets used abilities in shop (Only usable in the shop)",
                        run: function() {
                            var e;
                            "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = M()).setState({
                                abilities: Object.keys(e.state.abilities).reduce((e, t) => (e[t] = 5, e), {})
                            })
                        }
                    }, {
                        name: "Set Cash",
                        description: "Sets cafe cash",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function(e) {
                            var t = M();
                            t.setState({
                                cafeCash: e
                            }), t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/ca`,
                                val: e
                            })
                        }
                    }, {
                        name: "Stock Food",
                        description: "Stocks all food to 99 (Not usable in the shop)",
                        run: function() {
                            var e;
                            "/cafe" !== window.location.pathname ? alert("This can't be run in the shop") : (e = M()).setState({
                                foods: e.state.foods.map(e => ({ ...e,
                                    stock: 99,
                                    level: 5
                                }))
                            })
                        }
                    }]
                },
                factory: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Factory_Logo_Resized.png",
                    name: "Factory",
                    cheats: [{
                        name: "Choose Blook",
                        description: "Gives you a blook",
                        inputs: [{
                            name: "Blook",
                            type: "options",
                            options: [{
                                name: "Chick",
                                color: "#ffcd05",
                                class: "🌽",
                                rarity: "Common",
                                cash: [3, 7, 65, 400, 2500],
                                time: [1, 1, 1, 1, 1],
                                price: [300, 3e3, 3e4, 2e5]
                            }, {
                                name: "Chicken",
                                color: "#ed1c24",
                                class: "🌽",
                                rarity: "Common",
                                cash: [10, 40, 200, 1400, 1e4],
                                time: [5, 4, 3, 2, 1],
                                price: [570, 4e3, 5e4, 8e5]
                            }, {
                                name: "Cow",
                                color: "#58595b",
                                class: "🌽",
                                rarity: "Common",
                                cash: [25, 75, 1500, 25e3, 25e4],
                                time: [15, 10, 10, 10, 5],
                                price: [500, 9500, 16e4, 4e6]
                            }, {
                                name: "Duck",
                                color: "#4ab96d",
                                class: "🌽",
                                rarity: "Common",
                                cash: [4, 24, 200, 3e3, 4e4],
                                time: [3, 3, 3, 3, 3],
                                price: [450, 4200, 7e4, 11e5]
                            }, {
                                name: "Goat",
                                color: "#c59a74",
                                class: "🌽",
                                rarity: "Common",
                                cash: [5, 28, 200, 1300, 12e3],
                                time: [3, 3, 2, 2, 2],
                                price: [500, 6400, 45e3, 5e5]
                            }, {
                                name: "Horse",
                                color: "#995b3c",
                                class: "🌽",
                                rarity: "Common",
                                cash: [5, 20, 270, 1800, 15e3],
                                time: [2, 2, 2, 2, 2],
                                price: [550, 8200, 65e3, 6e5]
                            }, {
                                name: "Pig",
                                color: "#f6a9cb",
                                class: "🌽",
                                rarity: "Common",
                                cash: [20, 50, 1300, 8e3, 8e4],
                                time: [7, 7, 7, 7, 5],
                                price: [400, 11e3, 8e4, 13e5]
                            }, {
                                name: "Sheep",
                                color: "#414042",
                                class: "🌽",
                                rarity: "Common",
                                cash: [6, 25, 250, 1500, 11e3],
                                time: [3, 3, 3, 2, 2],
                                price: [500, 5e3, 5e4, 43e4]
                            }, {
                                name: "Cat",
                                color: "#f49849",
                                class: "🐾",
                                rarity: "Common",
                                cash: [5, 18, 170, 1700, 13e3],
                                time: [2, 2, 2, 2, 2],
                                price: [480, 5500, 6e4, 5e5]
                            }, {
                                name: "Dog",
                                color: "#995b3c",
                                class: "🐾",
                                rarity: "Common",
                                cash: [7, 25, 220, 1900, 9e3],
                                time: [3, 3, 2, 2, 1],
                                price: [460, 6600, 7e4, 73e4]
                            }, {
                                name: "Goldfish",
                                color: "#f18221",
                                class: "🐾",
                                rarity: "Common",
                                cash: [5, 40, 350, 3500, 35e3],
                                time: [3, 3, 3, 3, 3],
                                price: [750, 7200, 84e3, 95e4]
                            }, {
                                name: "Rabbit",
                                color: "#e7bf9a",
                                class: "🐾",
                                rarity: "Common",
                                cash: [3, 18, 185, 800, 7e3],
                                time: [2, 2, 2, 1, 1],
                                price: [500, 5800, 56e3, 55e4]
                            }, {
                                name: "Hamster",
                                color: "#ce9176",
                                class: "🐾",
                                rarity: "Common",
                                cash: [10, 45, 450, 4500, 45e3],
                                time: [4, 4, 4, 4, 4],
                                price: [650, 6500, 8e4, 93e4]
                            }, {
                                name: "Turtle",
                                color: "#619a3c",
                                class: "🐾",
                                rarity: "Common",
                                cash: [23, 120, 1400, 15e3, 17e4],
                                time: [10, 10, 10, 10, 10],
                                price: [700, 8500, 11e4, 13e5]
                            }, {
                                name: "Puppy",
                                color: "#414042",
                                class: "🐾",
                                rarity: "Common",
                                cash: [4, 10, 75, 500, 3e3],
                                time: [1, 1, 1, 1, 1],
                                price: [450, 4e3, 35e3, 25e4]
                            }, {
                                name: "Kitten",
                                color: "#58595b",
                                class: "🐾",
                                rarity: "Common",
                                cash: [4, 8, 60, 400, 2e3],
                                time: [1, 1, 1, 1, 1],
                                price: [350, 3500, 26e3, 17e4]
                            }, {
                                name: "Bear",
                                color: "#995b3c",
                                class: "🌲",
                                rarity: "Common",
                                cash: [12, 70, 550, 4500, 1e5],
                                time: [7, 7, 6, 5, 5],
                                price: [550, 5500, 63e3, 16e5]
                            }, {
                                name: "Moose",
                                color: "#995b3c",
                                class: "🌲",
                                rarity: "Common",
                                cash: [8, 45, 400, 3500, 26e3],
                                time: [5, 5, 4, 4, 3],
                                price: [520, 6500, 58e3, 7e5]
                            }, {
                                name: "Fox",
                                color: "#f49849",
                                class: "🌲",
                                rarity: "Common",
                                cash: [7, 15, 80, 550, 3e3],
                                time: [2, 2, 1, 1, 1],
                                price: [400, 4e3, 36e3, 24e4]
                            }, {
                                name: "Raccoon",
                                color: "#6d6e71",
                                class: "🌲",
                                rarity: "Common",
                                cash: [5, 14, 185, 1900, 19e3],
                                time: [2, 2, 2, 2, 2],
                                price: [400, 5e3, 71e3, 8e5]
                            }, {
                                name: "Squirrel",
                                color: "#d25927",
                                class: "🌲",
                                rarity: "Common",
                                cash: [3, 10, 65, 470, 2600],
                                time: [1, 1, 1, 1, 1],
                                price: [420, 3600, 32e3, 21e4]
                            }, {
                                name: "Owl",
                                color: "#594a42",
                                class: "🌲",
                                rarity: "Common",
                                cash: [4, 17, 155, 1500, 15e3],
                                time: [2, 2, 2, 2, 2],
                                price: [500, 4800, 55e3, 58e4]
                            }, {
                                name: "Hedgehog",
                                color: "#3f312b",
                                class: "🌲",
                                rarity: "Common",
                                cash: [11, 37, 340, 2200, 3e4],
                                time: [5, 4, 3, 2, 2],
                                price: [540, 7e3, 77e3, 12e5]
                            }, {
                                name: "Seal",
                                color: "#7ca1d5",
                                class: "❄️",
                                rarity: "Common",
                                cash: [6, 17, 150, 1200, 13e3],
                                time: [2, 2, 2, 2, 2],
                                price: [480, 4500, 43e3, 52e4]
                            }, {
                                name: "Arctic Fox",
                                color: "#7ca1d5",
                                class: "❄️",
                                rarity: "Common",
                                cash: [5, 18, 180, 850, 8500],
                                time: [2, 2, 2, 1, 1],
                                price: [520, 550, 61e3, 68e4]
                            }, {
                                name: "Snowy Owl",
                                color: "#feda3f",
                                class: "❄️",
                                rarity: "Common",
                                cash: [5, 20, 190, 1900, 16e3],
                                time: [3, 3, 2, 2, 2],
                                price: [370, 5300, 76e3, 62e4]
                            }, {
                                name: "Arctic Hare",
                                color: "#7ca1d5",
                                class: "❄️",
                                rarity: "Common",
                                cash: [6, 19, 85, 900, 7e3],
                                time: [2, 2, 1, 1, 1],
                                price: [540, 5200, 66e3, 55e4]
                            }, {
                                name: "Penguin",
                                color: "#fb8640",
                                class: "❄️",
                                rarity: "Common",
                                cash: [4, 21, 310, 3200, 33e3],
                                time: [3, 3, 3, 3, 3],
                                price: [400, 6500, 76e3, 87e4]
                            }, {
                                name: "Baby Penguin",
                                color: "#414042",
                                class: "❄️",
                                rarity: "Common",
                                cash: [3, 8, 70, 450, 2700],
                                time: [1, 1, 1, 1, 1],
                                price: [420, 3300, 33e3, 23e4]
                            }, {
                                name: "Polar Bear",
                                color: "#7ca1d5",
                                class: "❄️",
                                rarity: "Common",
                                cash: [12, 75, 700, 6500, 85e3],
                                time: [8, 7, 6, 5, 5],
                                price: [630, 7e3, 91e3, 14e5]
                            }, {
                                name: "Walrus",
                                color: "#7d4f33",
                                class: "❄️",
                                rarity: "Common",
                                cash: [11, 46, 420, 3700, 51e3],
                                time: [5, 5, 4, 4, 4],
                                price: [550, 6200, 68e3, 1e6]
                            }, {
                                name: "Tiger",
                                color: "#f18221",
                                class: "🌴",
                                rarity: "Common",
                                cash: [6, 20, 100, 975, 7500],
                                time: [3, 3, 1, 1, 1],
                                price: [390, 6e3, 7e4, 61e4]
                            }, {
                                name: "Jaguar",
                                color: "#fbb040",
                                class: "🌴",
                                rarity: "Common",
                                cash: [8, 28, 230, 1600, 17e3],
                                time: [3, 3, 2, 2, 2],
                                price: [390, 6e3, 7e4, 61e4]
                            }, {
                                name: "Toucan",
                                color: "#ffca34",
                                class: "🌴",
                                rarity: "Common",
                                cash: [9, 20, 175, 625, 3800],
                                time: [2, 2, 2, 1, 1],
                                price: [520, 4800, 42e3, 3e5]
                            }, {
                                name: "Cockatoo",
                                color: "#7ca1d5",
                                class: "🌴",
                                rarity: "Common",
                                cash: [6, 35, 160, 1700, 18e3],
                                time: [4, 4, 2, 2, 2],
                                price: [500, 5e3, 63e3, 7e5]
                            }, {
                                name: "Macaw",
                                color: "#00aeef",
                                class: "🌴",
                                rarity: "Common",
                                cash: [3, 8, 85, 850, 8500],
                                time: [1, 1, 1, 1, 1],
                                price: [480, 5400, 62e3, 63e4]
                            }, {
                                name: "Parrot",
                                color: "#ed1c24",
                                class: "🌴",
                                rarity: "Common",
                                cash: [3, 9, 90, 900, 9e3],
                                time: [1, 1, 1, 1, 1],
                                price: [540, 5700, 65e3, 69e4]
                            }, {
                                name: "Panther",
                                color: "#2f2c38",
                                class: "🌴",
                                rarity: "Common",
                                cash: [12, 28, 215, 2100, 21e3],
                                time: [5, 3, 2, 2, 2],
                                price: [530, 6500, 76e3, 87e4]
                            }, {
                                name: "Anaconda",
                                color: "#8a9143",
                                class: "🌴",
                                rarity: "Common",
                                cash: [3, 15, 85, 1500, 7600],
                                time: [1, 2, 1, 2, 1],
                                price: [410, 5100, 58e3, 59e4]
                            }, {
                                name: "Orangutan",
                                color: "#bc6234",
                                class: "🌴",
                                rarity: "Common",
                                cash: [13, 52, 570, 4300, 7e4],
                                time: [5, 5, 5, 4, 4],
                                price: [600, 7e3, 8e4, 14e5]
                            }, {
                                name: "Capuchin",
                                color: "#e0b0a6",
                                class: "🌴",
                                rarity: "Common",
                                cash: [4, 14, 160, 780, 8200],
                                time: [2, 2, 2, 1, 1],
                                price: [390, 4700, 57e3, 68e4]
                            }, {
                                name: "Elf",
                                color: "#a7d054",
                                class: "⚔️",
                                rarity: "Uncommon",
                                cash: [5e3, 15e3, 15e4, 15e5, 1e7],
                                time: [1, 1, 1, 1, 1],
                                price: [8e5, 9e6, 11e7, 8e8]
                            }, {
                                name: "Witch",
                                color: "#4ab96d",
                                class: "⚔️",
                                rarity: "Uncommon",
                                cash: [18e3, 6e4, 4e4, 4e6, 35e6],
                                time: [3, 3, 2, 2, 2],
                                price: [11e5, 12e6, 15e7, 14e8]
                            }, {
                                name: "Wizard",
                                color: "#5a459c",
                                class: "⚔️",
                                rarity: "Uncommon",
                                cash: [19500, 65e3, 44e4, 46e5, 4e6],
                                time: [3, 3, 2, 2, 2],
                                price: [13e5, 135e5, 16e7, 16e8]
                            }, {
                                name: "Fairy",
                                color: "#df6d9c",
                                class: "⚔️",
                                rarity: "Uncommon",
                                cash: [18500, 6e4, 62e4, 44e5, 38e6],
                                time: [3, 3, 3, 2, 2],
                                price: [12e5, 125e5, 15e6, 15e8]
                            }, {
                                name: "Slime Monster",
                                color: "#2fa04a",
                                class: "⚔️",
                                rarity: "Uncommon",
                                cash: [35e3, 14e4, 1e6, 11e6, 11e7],
                                time: [5, 5, 4, 4, 4],
                                price: [16e5, 15e6, 2e8, 23e8]
                            }, {
                                name: "Jester",
                                color: "#be1e2d",
                                class: "⚔️",
                                rarity: "Rare",
                                cash: [25e3, 1e5, 68e4, 65e5, 32e6],
                                time: [3, 3, 2, 2, 1],
                                price: [2e6, 21e6, 23e7, 26e8]
                            }, {
                                name: "Dragon",
                                color: "#2fa04a",
                                class: "⚔️",
                                rarity: "Rare",
                                cash: [36e3, 15e4, 15e5, 15e6, 15e7],
                                time: [4, 4, 4, 4, 4],
                                price: [23e5, 24e6, 27e7, 3e9]
                            }, {
                                name: "Unicorn",
                                color: "#f6afce",
                                class: "⚔️",
                                rarity: "Epic",
                                cash: [24e3, 15e4, 14e5, 7e6, 75e6],
                                time: [2, 2, 2, 1, 1],
                                price: [45e5, 45e6, 55e7, 65e8]
                            }, {
                                name: "Queen",
                                color: "#9e1f63",
                                class: "⚔️",
                                rarity: "Rare",
                                cash: [24e3, 95e3, 95e4, 97e5, 95e6],
                                time: [3, 3, 3, 3, 3],
                                price: [19e5, 2e7, 23e7, 25e8]
                            }, {
                                name: "King",
                                color: "#ee2640",
                                class: "⚔️",
                                rarity: "Legendary",
                                cash: [75e3, 4e5, 6e6, 9e7, 125e7],
                                time: [5, 5, 5, 5, 5],
                                price: [6e6, 95e6, 16e8, 25e9]
                            }, {
                                name: "Two of Spades",
                                color: "#414042",
                                class: "🏰",
                                rarity: "Uncommon",
                                cash: [4500, 14e3, 14e4, 14e5, 9e6],
                                time: [1, 1, 1, 1, 1],
                                price: [77e4, 83e5, 98e6, 71e7]
                            }, {
                                name: "Eat Me",
                                color: "#d58c55",
                                class: "🏰",
                                rarity: "Uncommon",
                                cash: [13e3, 45e3, 45e4, 45e5, 5e7],
                                time: [2, 2, 2, 2, 2],
                                price: [13e5, 14e6, 16e7, 2e9]
                            }, {
                                name: "Drink Me",
                                color: "#dd7399",
                                class: "🏰",
                                rarity: "Uncommon",
                                cash: [12e3, 4e4, 4e5, 4e6, 45e6],
                                time: [2, 2, 2, 2, 2],
                                price: [12e5, 12e6, 14e7, 18e8]
                            }, {
                                name: "Alice",
                                color: "#4cc9f5",
                                class: "🏰",
                                rarity: "Uncommon",
                                cash: [13e3, 42e3, 21e4, 21e5, 23e6],
                                time: [2, 2, 1, 1, 1],
                                price: [12e5, 13e6, 15e7, 19e8]
                            }, {
                                name: "Queen of Hearts",
                                color: "#d62027",
                                class: "🏰",
                                rarity: "Uncommon",
                                cash: [23e3, 87e3, 62e4, 75e5, 9e7],
                                time: [4, 4, 3, 3, 3],
                                price: [13e5, 13e6, 18e7, 24e8]
                            }, {
                                name: "Dormouse",
                                color: "#89d6f8",
                                class: "🏰",
                                rarity: "Rare",
                                cash: [17e3, 68e3, 7e5, 35e5, 35e6],
                                time: [2, 2, 1, 1, 1],
                                price: [2e6, 22e6, 25e7, 28e8]
                            }, {
                                name: "White Rabbit",
                                color: "#ffcd05",
                                class: "🏰",
                                rarity: "Rare",
                                cash: [26e3, 105e3, 11e6, 77e5, 72e6],
                                time: [3, 3, 3, 2, 2],
                                price: [2e6, 23e6, 28e7, 29e8]
                            }, {
                                name: "Cheshire Cat",
                                color: "#dd7399",
                                class: "🏰",
                                rarity: "Rare",
                                cash: [32e3, 1e5, 9e5, 9e6, 6e7],
                                time: [4, 3, 3, 3, 2],
                                price: [18e5, 19e6, 22e7, 24e8]
                            }, {
                                name: "Caterpillar",
                                color: "#00c0f3",
                                class: "🏰",
                                rarity: "Epic",
                                cash: [1e4, 7e4, 65e4, 75e5, 85e6],
                                time: [1, 1, 1, 1, 1],
                                price: [42e5, 42e6, 54e7, 69e8]
                            }, {
                                name: "Mad Hatter",
                                color: "#914f93",
                                class: "🏰",
                                rarity: "Epic",
                                cash: [38e3, 25e4, 15e5, 14e6, 8e7],
                                time: [3, 3, 2, 2, 1],
                                price: [48e5, 48e6, 52e7, 66e8]
                            }, {
                                name: "King of Hearts",
                                color: "#c62127",
                                class: "🏰",
                                rarity: "Legendary",
                                cash: [8e4, 42e4, 68e5, 1e8, 15e8],
                                time: [5, 5, 5, 5, 5],
                                price: [7e6, 11e7, 18e8, 3e10]
                            }, {
                                name: "Earth",
                                color: "#416eb5",
                                class: "🚀",
                                rarity: "Uncommon",
                                cash: [15e3, 45e3, 6e5, 65e5, 65e6],
                                time: [3, 3, 3, 3, 3],
                                price: [1e6, 11e6, 15e7, 17e8]
                            }, {
                                name: "Meteor",
                                color: "#c68c3c",
                                class: "🚀",
                                rarity: "Uncommon",
                                cash: [23e3, 65e3, 7e5, 45e5, 2e7],
                                time: [5, 4, 3, 2, 1],
                                price: [95e4, 13e6, 16e7, 16e8]
                            }, {
                                name: "Stars",
                                color: "#19184d",
                                class: "🚀",
                                rarity: "Uncommon",
                                cash: [1e4, 4e4, 2e5, 2e6, 18e6],
                                time: [2, 2, 1, 1, 1],
                                price: [14e5, 14e6, 15e7, 15e8]
                            }, {
                                name: "Alien",
                                color: "#8dc63f",
                                class: "🚀",
                                rarity: "Uncommon",
                                cash: [3e4, 1e5, 1e6, 11e6, 85e6],
                                time: [4, 4, 4, 4, 4],
                                price: [15e5, 17e6, 19e7, 17e8]
                            }, {
                                name: "Planet",
                                color: "#9dc6ea",
                                class: "🚀",
                                rarity: "Rare",
                                cash: [25e3, 1e5, 9e5, 9e6, 9e7],
                                time: [3, 3, 3, 3, 3],
                                price: [2e6, 21e6, 21e7, 24e8]
                            }, {
                                name: "UFO",
                                color: "#a15095",
                                class: "🚀",
                                rarity: "Rare",
                                cash: [17e3, 7e4, 7e5, 7e6, 7e7],
                                time: [2, 2, 2, 2, 2],
                                price: [21e5, 23e6, 25e7, 28e8]
                            }, {
                                name: "Spaceship",
                                color: "#ffcb29",
                                class: "🚀",
                                rarity: "Epic",
                                cash: [6e4, 32e4, 21e5, 15e6, 85e6],
                                time: [5, 4, 3, 2, 1],
                                price: [48e5, 46e6, 54e7, 68e8]
                            }, {
                                name: "Astronaut",
                                color: "#9bd4ee",
                                class: "🚀",
                                rarity: "Legendary",
                                cash: [45e3, 26e4, 25e5, 38e6, 55e7],
                                time: [3, 3, 2, 2, 2],
                                price: [65e5, 1e8, 17e8, 27e9]
                            }, {
                                name: "Lil Bot",
                                color: "#3e564a",
                                class: "🤖",
                                rarity: "Uncommon",
                                cash: [4e3, 12e3, 18e4, 19e5, 25e6],
                                time: [1, 1, 1, 1, 1],
                                price: [73e4, 12e6, 13e7, 19e8]
                            }, {
                                name: "Lovely Bot",
                                color: "#f179af",
                                class: "🤖",
                                rarity: "Uncommon",
                                cash: [16e3, 65e3, 65e4, 48e5, 42e6],
                                time: [3, 3, 3, 2, 2],
                                price: [13e5, 14e6, 17e7, 16e8]
                            }, {
                                name: "Angry Bot",
                                color: "#f1613a",
                                class: "🤖",
                                rarity: "Uncommon",
                                cash: [22e3, 85e3, 8e5, 62e5, 65e6],
                                time: [4, 4, 4, 3, 3],
                                price: [12e5, 13e6, 15e7, 17e8]
                            }, {
                                name: "Happy Bot",
                                color: "#51ba6b",
                                class: "🤖",
                                rarity: "Uncommon",
                                cash: [11e3, 45e3, 5e5, 25e5, 3e7],
                                time: [2, 2, 2, 1, 1],
                                price: [14e5, 15e6, 18e7, 24e8]
                            }, {
                                name: "Watson",
                                color: "#d69b5a",
                                class: "🤖",
                                rarity: "Rare",
                                cash: [24e3, 1e5, 1e6, 1e7, 1e8],
                                time: [3, 3, 3, 3, 3],
                                price: [2e6, 22e6, 24e7, 26e8]
                            }, {
                                name: "Buddy Bot",
                                color: "#9dc6ea",
                                class: "🤖",
                                rarity: "Rare",
                                cash: [22e3, 95e3, 65e4, 65e5, 65e6],
                                time: [3, 3, 2, 2, 2],
                                price: [19e5, 21e6, 23e7, 25e8]
                            }, {
                                name: "Brainy Bot",
                                color: "#9ecf7a",
                                class: "🤖",
                                rarity: "Epic",
                                cash: [5e4, 25e4, 21e5, 21e6, 17e7],
                                time: [4, 3, 3, 3, 2],
                                price: [5e6, 46e6, 5e8, 67e8]
                            }, {
                                name: "Mega Bot",
                                color: "#d71f27",
                                class: "🤖",
                                rarity: "Legendary",
                                cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                time: [5, 5, 3, 3, 3],
                                price: [7e6, 12e7, 19e8, 35e9]
                            }].map(e => ({
                                name: e.name,
                                value: JSON.stringify(e)
                            }))
                        }],
                        run: function(e) {
                            var t = M();
                            10 <= t.state.blooks.length && alert("Choose a blook to replace"), t.waiting = !1, t.chooseBlook(JSON.parse(e))
                        }
                    }, {
                        name: "Free Upgrades",
                        description: "Sets upgrade prices to 0 for all current blooks",
                        run: function() {
                            const t = [0, 0, 0, 0];
                            var e = M();
                            e.setState({
                                blooks: e.state.blooks.map(e => ({ ...e,
                                    price: t
                                }))
                            })
                        }
                    }, {
                        name: "Max Blooks",
                        description: "Maxes out all your blooks' levels",
                        run: function() {
                            M().state.blooks.forEach(e => e.level = 4)
                        }
                    }, {
                        name: "Remove Glitches",
                        description: "Removes all enemy glitches",
                        run: function() {
                            var e = M();
                            e.setState({
                                bits: 0,
                                ads: [],
                                hazards: [],
                                color: "",
                                lol: !1,
                                joke: !1,
                                slow: !1,
                                dance: !1,
                                glitch: "",
                                glitcherName: "",
                                glitcherBlook: ""
                            }), clearTimeout(e.adTimeout), clearInterval(e.hazardInterval), clearTimeout(e.nightTimeout), clearTimeout(e.glitchTimeout), clearTimeout(e.lolTimeout), clearTimeout(e.jokeTimeout), clearTimeout(e.slowTimeout), clearTimeout(e.danceTimeout), clearTimeout(e.nameTimeout)
                        }
                    }, {
                        name: "Send Glitch",
                        description: "Sends a glitch to everyone else playing",
                        inputs: [{
                            name: "Glitch",
                            type: "options",
                            options: Object.entries({
                                lb: "Lunch Break",
                                as: "Ad Spam",
                                e37: "Error 37",
                                nt: "Night Time",
                                lo: "#LOL",
                                j: "Jokester",
                                sm: "Slow Mo",
                                dp: "Dance Party",
                                v: "Vortex",
                                r: "Reverse",
                                f: "Flip",
                                m: "Micro"
                            }).map(([e, t]) => ({
                                name: t,
                                value: e
                            }))
                        }],
                        run: function(e) {
                            var t = M();
                            t.safe = !0, t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/tat`,
                                val: e
                            })
                        }
                    }, {
                        name: "Set All MegaBot",
                        description: "Sets all your blooks to maxed out Mega Bots",
                        run: function() {
                            M().setState({
                                blooks: Array.from({
                                    length: 10
                                }, () => ({
                                    name: "Mega Bot",
                                    color: "#d71f27",
                                    class: "🤖",
                                    rarity: "Legendary",
                                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                    time: [5, 5, 3, 3, 3],
                                    price: [7e6, 12e7, 19e8, 35e9],
                                    active: !1,
                                    level: 4,
                                    bonus: 5.5
                                }))
                            })
                        }
                    }, {
                        name: "Set Cash",
                        description: "Sets amount of cash you have",
                        inputs: [{
                            name: "Cash",
                            type: "number"
                        }],
                        run: function(e) {
                            M().setState({
                                cash: e
                            })
                        }
                    }]
                },
                racing: {
                    img: "https://media.blooket.com/image/upload/v1663212882/Media/logos/Racing_Logo_Resized.png",
                    name: "Racing",
                    cheats: [{
                        name: "Instant Win",
                        description: "Instantly Wins the race",
                        run: function() {
                            var e = M();
                            e.setState({
                                progress: e.state.goalAmount
                            }), e.props.liveGameController.setVal({
                                path: "c/" + e.props.client.name + "/pr",
                                val: e.state.goalAmount
                            })
                        }
                    }, {
                        name: "Set Questions",
                        description: "Sets the number of questions left",
                        inputs: [{
                            name: "Questions",
                            type: "number"
                        }],
                        run: function(e) {
                            var t = M();
                            e = t.props.client.amount - e, t.setState({
                                progress: e
                            }), t.props.liveGameController.setVal({
                                path: "c/" + t.props.client.name + "/pr",
                                val: e
                            })
                        }
                    }]
                },
                rush: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Blook_Rush_Logo_Resized.png",
                    name: "Blook Rush",
                    cheats: [{
                        name: "Set Blooks",
                        description: "Sets amount of blooks you or your team has",
                        inputs: [{
                            name: "Blooks",
                            type: "number"
                        }],
                        run: function(e) {
                            var t = M();
                            t.setState({
                                numBlooks: e
                            }), t.props.liveGameController.setVal({
                                path: (t.isTeam ? "a/" : "c/") + t.props.client.name + "/bs",
                                val: e
                            })
                        }
                    }, {
                        name: "Set Defense",
                        description: "Sets amount of defense you or your team has (Max 4)",
                        inputs: [{
                            name: "Defense (max 4)",
                            type: "number",
                            max: 4
                        }],
                        run: function(e) {
                            var e = Math.min(e, 4),
                                t = M();
                            t.setState({
                                numDefense: e
                            }), t.props.liveGameController.setVal({
                                path: (t.isTeam ? "a/" : "c/") + t.props.client.name + "/d",
                                val: e
                            })
                        }
                    }]
                },
                tower: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Tower_Of_Doom_Logo_Resized.png",
                    name: "Tower of Doom",
                    cheats: [{
                        name: "Fill Deck",
                        description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                        run: function() {
                            if ("/tower/map" == window.location.pathname) {
                                var e = M();
                                e.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split("|"), e.props.tower.cards = "Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰".split("|").map(e => {
                                    var [e, t] = e.split(",");
                                    return {
                                        strength: 20,
                                        charisma: 20,
                                        wisdom: 20,
                                        class: t,
                                        blook: e
                                    }
                                });
                                try {
                                    e.props.addTowerNode()
                                } catch {}
                                e.setState({
                                    showDeck: !1
                                })
                            } else alert("You need to be on the map to run this cheat!")
                        }
                    }, {
                        name: "Max Cards",
                        description: "Maxes out all the cards in your deck",
                        run: function() {
                            if ("/tower/map" == window.location.pathname) {
                                var e = M();
                                e.props.tower.cards.forEach(e => {
                                    e.strength = 20, e.charisma = 20, e.wisdom = 20
                                });
                                try {
                                    e.forceUpdate()
                                } catch {}
                            } else alert("You need to be on the map to run this cheat!")
                        }
                    }, {
                        name: "Max Health",
                        description: "Fills the player's health",
                        run: function() {
                            "/tower/battle" == window.location.pathname ? M().setState({
                                myHealth: 100,
                                myLife: 100
                            }) : alert("You need to be in battle to run this cheat!")
                        }
                    }, {
                        name: "Max Card Stats",
                        description: "Maxes out player's current card (Only works on attribute select page)",
                        run: function() {
                            var e = M();
                            "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                                myCard: { ...e.state.myCard,
                                    strength: 20,
                                    charisma: 20,
                                    wisdom: 20
                                }
                            })
                        }
                    }, {
                        name: "Min Enemy Stats",
                        description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                        run: function() {
                            var e = M();
                            "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                                enemyCard: { ...e.state.enemyCard,
                                    strength: 0,
                                    charisma: 0,
                                    wisdom: 0
                                }
                            })
                        }
                    }, {
                        name: "Set Coins",
                        description: "Try's to set amount of tower coins you have",
                        inputs: [{
                            name: "Coins",
                            type: "number"
                        }],
                        run: function(e) {
                            if ("/tower/battle" == window.location.pathname) try {
                                M().props.setTowerCoins(e)
                            } catch {} else alert("You need to be in battle to run this cheat!")
                        }
                    }]
                },
                kingdom: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Crazy_Kingdom_Logo_Resized.png",
                    name: "Crazy Kingdom",
                    cheats: [{
                        name: "Choice ESP",
                        description: "Shows you what will happen if you say Yes or No",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), e => e.remove()), this.data = null) : (this.enabled = !0, this.data = setInterval(o => {
                                let a = M(),
                                    n = Array.prototype.reduce.call(document.querySelectorAll("[class*=statContainer]"), (e, t, a) => (e[o[a]] = t, e), {});
                                "choice" == a.state.phase && (Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), e => e.remove()), Object.keys(a.state.guest.yes || {}).forEach(e => {
                                    var t;
                                    null != n[e] && ((t = document.createElement("div")).className = "choiceESP", t.style = "font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;", t.innerText = String(a.state.guest.yes[e]), n[e].appendChild(t))
                                }), Object.keys(a.state.guest.no || {}).forEach(e => {
                                    var t;
                                    null != n[e] && ((t = document.createElement("div")).className = "choiceESP", t.style = "font-size: 24px; color: darkred; font-weight: bolder;", t.innerText = String(a.state.guest.no[e]), n[e].appendChild(t))
                                }), Array.prototype.forEach.call(document.querySelectorAll("[class*=guestButton][role=button]"), e => e.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), e => e.remove())))
                            }, 50, ["materials", "people", "happiness", "gold"]))
                        }
                    }, {
                        name: "Disable Tax Toucan",
                        description: "Tax evasion",
                        run: function() {
                            M().taxCounter = Number.MAX_VALUE
                        }
                    }, {
                        name: "Max Stats",
                        description: "Sets all resources to the max",
                        run: function() {
                            M().setState({
                                materials: 100,
                                people: 100,
                                happiness: 100,
                                gold: 100
                            })
                        }
                    }, {
                        name: "Set Guests",
                        description: "Sets the amount of guests you've seen",
                        inputs: [{
                            name: "Guests",
                            type: "number"
                        }],
                        run: function(e) {
                            M().setState({
                                guestScore: e
                            })
                        }
                    }, {
                        name: "Skip Guest",
                        description: "Skips the current guest",
                        run: function() {
                            M().nextGuest()
                        }
                    }]
                },
                toy: {
                    img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Santas_Workshop_Logo_Resized.png",
                    name: "Santa's Workshop",
                    cheats: [{
                        name: "Remove Distractions",
                        description: "Removes all enemy distractions",
                        run: function() {
                            M().setState({
                                fog: !1,
                                dusk: !1,
                                wind: !1,
                                plow: !1,
                                blizzard: !1,
                                force: !1,
                                canada: !1,
                                trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                            })
                        }
                    }, {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone else playing",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: Object.entries({
                                c: "Oh Canada",
                                b: "Blizzard",
                                f: "Fog Spell",
                                d: "Dark & Dusk",
                                w: "Howling Wind",
                                g: "Gift Time!",
                                t: "TREES",
                                s: "Snow Plow",
                                fr: "Use The Force"
                            }).map(([e, t]) => ({
                                name: t,
                                value: e
                            }))
                        }],
                        run: function(e) {
                            var t = M();
                            t.safe = !0, t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/tat`,
                                val: e
                            })
                        }
                    }, {
                        name: "Set Toys",
                        description: "Sets amount of toys",
                        inputs: [{
                            name: "Toys",
                            type: "number"
                        }],
                        run: function(e) {
                            var t = M();
                            t.setState({
                                toys: e
                            }), t.props.liveGameController.setVal({
                                path: "c/" + t.props.client.name + "/t",
                                val: e
                            })
                        }
                    }, {
                        name: "Set Toys Per Question",
                        description: "Sets amount of toys per question",
                        inputs: [{
                            name: "Toys Per Question",
                            type: "number"
                        }],
                        run: function(e) {
                            M().setState({
                                toysPerQ: e
                            })
                        }
                    }, {
                        name: "Swap Toys",
                        description: "Swaps toys with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let e = M();
                                return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                            }
                        }],
                        run: function(t) {
                            let a = M();
                            a.props.liveGameController.getDatabaseVal("c", e => {
                                e && null != e[t] && (a.props.liveGameController.setVal({
                                    path: "c/" + a.props.client.name + "/tat",
                                    val: t + ":swap:" + a.state.toys
                                }), a.setState({
                                    toys: e[t].t
                                }))
                            })
                        }
                    }]
                },
                flappy: {
                    img: "https://ac.blooket.com/marketassets/blooks/chick.svg",
                    name: "Flappy Blook",
                    cheats: [{
                        name: "Toggle Ghost",
                        description: "Lets you go through the pipes",
                        type: "toggle",
                        enabled: !1,
                        run: function() {
                            this.enabled = !this.enabled;
                            for (const e of Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries)
                                if (e.gameObject.frame.texture.key.startsWith("blook")) {
                                    e.checkCollision.none = this.enabled, e.gameObject.setAlpha(this.enabled ? .5 : 1);
                                    break
                                }
                        }
                    }, {
                        name: "Set Score",
                        description: "Sets flappy blook score",
                        inputs: [{
                            name: "Score",
                            type: "number"
                        }],
                        run: function(e) {
                            Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[1](e || 0)
                        }
                    }]
                }
            });
            var te = document.createElement("div");
            te.className = u.searchPage;
            const ae = document.createElement("form"),
                c = (ae.className = u.searchbarHolder, document.createElement("input"));
            c.placeholder = "Search Cheats", c.className = u.searchbarInput;
            var d = document.createElement("div");
            d.onclick = () => c.value = "", d.innerHTML = '<i class="fas fa-times" style="line-height: 1;"></i>', d.className = u.searchbarButton, ae.append(c, d);
            const f = document.createElement("div"),
                p = (f.className = u.noScroll + " " + u.searchResults, document.createElement("div"));
            p.className = u.noResult, te.append(ae, f);
            let oe, ne = {};
            te.onPath = ae.onsubmit = e => {
                clearTimeout(oe), e?.preventDefault?.();
                var t = c.value.toLowerCase();
                let a = !1;
                for (const o of f.children) o != p && (o.dataset[h.mode]?.includes?.(t) || o.dataset[h.name].includes(t) || o.dataset[h.description]?.includes?.(t) ? (a = !0, o.style.display = "block", o.dataset[h.mode] && (ne[o.dataset[h.mode]].style.display = "block")) : o.style.display = "none");
                a ? p.style.display = "none" : (p.innerText = `No results found for "${t}"`, p.style.display = "block")
            }, c.oninput = e => {
                clearTimeout(oe), oe = setTimeout(ae.onsubmit, 1e3)
            };
            const m = document.createElement("div"),
                re = (m.className = u.noScroll + " " + u.favoritesPage, document.createElement("span"));
            re.innerText = "You have no favorites.", m.append(re), m.onPath = () => {
                re.style.display = null == m.querySelector("[data-" + h.favorited + "='true']") ? "block" : "none"
            }, J.innerHTML = "", f.innerHTML = "", f.append(p);
            for (const P in l) {
                var se = document.createElement("div"),
                    ie = (se.className = u.gamemode, document.createElement("img")),
                    le = (ie.src = l[P].img, document.createElement("div"));
                ie.alt = le.innerText = l[P].name, se.append(ie, le);
                const O = document.createElement("div");
                O.className = u.contentPage;
                var ce = document.createElement("div");
                ce.className = u.cheatsList + " " + u.noScroll;
                const ze = [],
                    S = (O.onPath = () => ze.forEach(e => e()), document.createElement("div")),
                    L = (S.onclick = () => g.push(l[P].name, O), S.className = u.searchResultSeparator, S.dataset[h.name] = (S.innerText = l[P].name).toLowerCase(), ne[l[P].name.toLowerCase()] = S, f.append(S), S.cloneNode(!0));
                L.dataset[h.favorites] = 0, L.onclick = S.onclick, m.append(L);
                for (const D of l[P].cheats) {
                    const Be = `${P}.${D.name.toLowerCase()}.` + ("toggle" == D.type ? "toggle" : "execute"),
                        Re = document.createElement("div");
                    var y = document.createElement("div"),
                        de = (y.className = u.searchResult, document.createElement("div"));
                    de.className = u.searchResultInfo;
                    const Ge = document.createElement("div");
                    Ge.className = u.searchResultName, y.dataset[h.name] = (Ge.innerText = D.name + ("toggle" != D.type || D.name.includes("toggle") ? "" : " (Toggle)")).toLowerCase(), y.dataset[h.mode] = l[P].name.toLowerCase();
                    var b = document.createElement("div"),
                        b = (b.className = u.searchResultDescription, y.dataset[h.description] = (b.innerText = D.description).toLowerCase(), de.append(Ge, b), y.onclick = () => {
                            g.push(Ge.innerText, O), Re.scrollIntoView(), Re.animate([{
                                color: "var(--textColor)",
                                textShadow: "0 0 0px var(--highlight)"
                            }, {
                                color: "var(--highlight)",
                                textShadow: "0 0 5px var(--highlight)",
                                offset: .25
                            }, {
                                color: "var(--textColor)",
                                textShadow: "0 0 0px var(--highlight)"
                            }], 1500)
                        }, y.append(de), f.append(y), document.createElement("div")),
                        de = (b.className = u.cheatTop, document.createElement("div")),
                        pe = (de.className = u.cheatInfo, document.createElement("span")),
                        me = (pe.innerText = D.name, pe.className = u.cheatName, document.createElement("i"));
                    me.className = "far fa-star " + u.favoriteButton;
                    const Ie = document.createElement("i");
                    Ie.className = "fas fa-star", me.append(Ie);
                    let t = y.cloneNode(!0);
                    t.dataset[h.favorited] = !1, t.onclick = y.onclick, m.append(t), me.onclick = () => {
                        var e = Be in n.data.favorites;
                        Ie.classList.toggle(u.filled, !e), e ? (delete n.data.favorites[Be], t.dataset[h.favorited] = !1, L.dataset[h.favorites]--) : (n.data.favorites[Be] = 1, t.dataset[h.favorited] = !0, L.dataset[h.favorites]++), m.onPath(), n.setData(n.data)
                    }, Be in(n.data.favorites ??= {}) && (Ie.classList.toggle(u.filled, !0), t.dataset[h.favorited] = !0, L.dataset[h.favorites]++);
                    pe.append(me);
                    y = document.createElement("span");
                    y.innerText = D.description, y.className = u.cheatDescription, de.append(pe, y), Re.append(b);
                    const N = [];
                    if (Array.isArray(D.inputs)) {
                        var ue = document.createElement("div");
                        ue.className = u.cheatInputs;
                        for (const B of D.inputs) {
                            var he = document.createElement("div"),
                                v = document.createElement("span");
                            if (v.innerText = B.name, he.append(v), ue.append(he), "options" == B.type) {
                                v = document.createElement("select");
                                v.dataset[h.type] = "options", he.append(v), N.push(v);
                                let r = v;
                                v = () => {
                                    let e = B.options;
                                    const t = document.createElement("select");
                                    if (t.dataset[h.type] = "options", N[N.indexOf(r)] = t, r.replaceWith(t), r = t, "function" == typeof e) try {
                                        e = e()
                                    } catch {
                                        e = []
                                    }
                                    if (e instanceof Promise) {
                                        var a = document.createElement("option");
                                        a.value = '""', a.innerHTML = "Loading Options...", r.append(a), e.then(e => {
                                            if (0 < e?.length) {
                                                r.innerHTML = "";
                                                for (const a of e) {
                                                    var t = document.createElement("option");
                                                    t.value = JSON.stringify(a?.value ?? a), t.innerHTML = a?.name || a, r.append(t)
                                                }
                                            } else {
                                                e = document.createElement("input");
                                                N[N.indexOf(r)] = e, r.replaceWith(e), e.dataset[h.type] = "string", e.placeholder = B.name, r = e
                                            }
                                        })
                                    } else if (0 < e?.length)
                                        for (const n of e) {
                                            var o = document.createElement("option");
                                            o.value = JSON.stringify(n?.value ?? n), o.innerHTML = n?.name || n, r.append(o)
                                        }
                                    else {
                                        const t = document.createElement("input");
                                        N[N.indexOf(r)] = t, r.replaceWith(t), t.dataset[h.type] = "string", t.placeholder = B.name, r = t
                                    }
                                };
                                v(), ze.push(v)
                            } else {
                                v = document.createElement("input");
                                v.dataset[h.type] = B.type, "number" == B.type && (v.type = "number", v.min = B.min, v.max = B.max, v.value = B.value || (B.min ?? 0)), v.placeholder = B.name, he.append(v), N.push(v)
                            }
                        }
                        Re.append(ue)
                    }
                    b.append(de);
                    const z = document.createElement("div");
                    z.className = u.runCheat, "toggle" == D.type ? (z.innerText = "Toggle On", z.classList.add(u.toggleCheat)) : z.innerText = "Execute", z.onclick = () => {
                        D.run.apply(D, N.map(e => "number" == e.dataset[h.type] ? parseFloat("0" + e.value) : "options" == e.dataset[h.type] ? JSON.parse(e.value) : e.value)), "toggle" == D.type && (z.innerText = "Toggle " + (D.enabled ? "Off" : "On"), z.classList.toggle(u.active, D.enabled), A.addLog(`Toggled "${D.name}" ` + (D.enabled ? "on" : "off"), D.enabled ? "var(--toggleOn)" : "var(--toggleOff)")), A.addLog(`Ran "${D.name}"`, "var(--highlight)")
                    }, b.append(z), ce.append(Re)
                }
                O.append(ce), se.onclick = () => g.push(l[P].name, O), J.append(se)
            }
            s.append(J);
            var d = document.createElement("div"),
                ge = (d.className = u.creditsPage, document.createElement("div")),
                fe = (ge.className = u.licenseMessage, ge.innerHTML = '<i class="fas fa-file-alt" style="line-height: 1;aspect-ratio: 1 / 1;height: 20px;display: inline-grid;place-items: center;"></i> This script is licensed under <a style="color: var(--highlight);" target="_blank" href="https://www.gnu.org/licenses/agpl-3.0.en.html">AGPL-3.0</a>, read more <a style="color: var(--highlight);" target="_blank" href="https://github.com/Blooket-Council/Blooket-Cheats?tab=readme-ov-file#licensing">here</a>.<br>', document.createElement("span")),
                w = (fe.className = u.copyrightTag, fe.innerText = `Copyright © ${(new Date).getFullYear()} MIKI201487`, document.createElement("ul")),
                ye = (w.className = u.codingCredits, w.append(x("GUI Design + Creation", "MIKI201487")), w.append(x("Anti-Suspend", "CryptoDude3")), w.append(x("Blooket Cheats", 'gliz <i class="fas fa-long-arrow-alt-right"></i> Minesraft2 <i class="fas fa-long-arrow-alt-right"></i> MIKI201487')), document.createElement("ul"));
    
            function be(e) {
                return (e.getHours() % 12 == 0 ? 12 : e.getHours() % 12) + `:${e.getMinutes().toString().padStart(2,"0")} ` + (12 <= e.getHours() ? "PM" : "AM")
            }
    
            function ve(e) {
                var t;
                return `${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${e.getDate()}${t=e.getDate(),t% 10==1&&t% 100!=11?"st":t% 10==2&&t% 100!=12?"nd":t% 10==3&&t% 100!=13?"rd":"th"}, ${e.getFullYear()} - ` + be(e)
            }
            ye.className = u.creditLinks, ye.append(x("GitHub", '<a target="_blank" href="https://github.com/Blooket-Council/Blooket-Cheats">Blooket-Council/Blooket-Cheats</a>')), ye.append(x("GitLab", '<a target="_blank" href="https://gitlab.com/blooket/blooket-cheats">blooket/blooket-cheats</a>')), ye.append(x("Discord", '<a target="_blank" href="https://discord.gg/jHjGrrdXP6">Kondumb (Support / Feedback Server)</a>'));
            var we = document.createElement("ul");
            we.className = u.uploadDates;
            try {
                var k = new Date(qe),
                    ke = new Date(He);
                we.append(x("Current GUI Upload Date", ve(k))), -1 != He && we.append(x("Latest GUI Upload Date", ve(ke))), k < ke && ((Ce = document.createElement("span")).className = u.warning, Ce.innerText = "You are using an outdated version of Client: Secret Vr90, check out the GitHub / GitLab for a newer version.", we.append(Ce))
            } catch (e) {
                k = document.createElement("span");
                k.className = u.warning, k.innerText = "Unable to check update information.", we.append(k)
            }
    
            function x(e, t) {
                var a = document.createElement("li"),
                    o = document.createElement("strong"),
                    e = (o.innerText = e + ":", document.createElement("span"));
                return e.innerHTML = t, a.append(o, e), a
            }
            d.append(ge, w, ye, we, fe);
            const xe = document.createElement("div"),
                S = (xe.className = u.noScroll + " " + u.settingsPage, document.createElement("div")),
                C = (S.onclick = () => g.push("Settings", xe), S.className = u.searchResultSeparator, S.innerText = "Settings", S.dataset[h.name] = "settings", ne.settings = S, f.append(S), []);
    
            function T(e, t, a, o) {
                const n = document.createElement("div");
                var r = document.createElement("div"),
                    s = (r.className = u.searchResult, document.createElement("div")),
                    i = (s.className = u.searchResultInfo, document.createElement("div")),
                    l = (i.className = u.searchResultName, r.dataset[h.name] = (i.innerText = e).toLowerCase(), r.dataset[h.mode] = "settings", document.createElement("div")),
                    i = (l.className = u.searchResultDescription, r.dataset[h.description] = (l.innerText = t).toLowerCase(), s.append(i, l), r.onclick = () => {
                        g.push(e, xe), n.scrollIntoView(), n.animate([{
                            color: "var(--textColor)",
                            textShadow: "0 0 0px var(--highlight)"
                        }, {
                            color: "var(--highlight)",
                            textShadow: "0 0 5px var(--highlight)",
                            offset: .25
                        }, {
                            color: "var(--textColor)",
                            textShadow: "0 0 0px var(--highlight)"
                        }], 1500)
                    }, r.append(s), f.append(r), document.createElement("div")),
                    l = (i.className = u.cheatTop, document.createElement("div")),
                    s = (l.className = u.cheatInfo, document.createElement("span")),
                    r = (s.innerText = e, s.className = u.cheatName, document.createElement("span")),
                    t = (r.innerText = t, r.className = u.cheatDescription, l.append(s, r), n.append(i), document.createElement("div")),
                    s = (t.className = u.cheatInputs, document.createElement("div")),
                    r = document.createElement("span");
                r.innerText = a.name, s.append(r), t.append(s);
                let c = document.createElement("input");
                if (c.dataset[h.type] = a.type, "keybind" == a.type) {
                    let e = !(c.readOnly = !0);
                    c.data = a.data, c.onclick = async() => {
                        e || (c.value = "Waiting for input...", e = !0, c.data = await a.listen(e => c.value = e + "..."), e = !1, c.value = c.value.slice(0, -3))
                    }, (C[C.length] = () => c.value = a.value())()
                } else if ("options" == a.type) {
                    (c = document.createElement("select")).dataset[h.type] = "options";
                    const p = document.createElement("option");
                    p.value = "{}", p.innerHTML = "Select a Theme", (C[C.length] = () => p.selected = !0)(), c.append(p);
                    for (const m of a.options) {
                        var d = document.createElement("option");
                        d.value = JSON.stringify(m?.value ?? m), d.innerHTML = m?.name || m, c.append(d)
                    }
                } else "number" == a.type && (c.type = "number", c.min = a.min, c.max = a.max), (C[C.length] = () => c.value = a.value())(), c.placeholder = a.name;
                s.append(c), n.append(t), i.append(l);
                r = document.createElement("div");
                r.className = u.runCheat, r.innerText = "Update", r.onclick = () => o("number" == c.dataset[h.type] ? parseFloat("0" + c.value) : "options" == c.dataset[h.type] ? JSON.parse(c.value) : c.data ?? c.value), i.append(r), xe.append(n)
            }
            xe.onPath = () => C.forEach(e => e()), T("Hide Keybind", "Shortcut to hide to GUI", {
                type: "keybind",
                name: "Shortcut",
                data: G,
                value: () => Me(n.data.hideKey),
                listen: t => Ae(e => t(Me(e)))
            }, e => {
                n.setItem("hideKey", e)
            }), T("Close Keybind", "Shortcut to disable all toggles and close GUI", {
                type: "keybind",
                name: "Shortcut",
                data: I,
                value: () => Me(n.data.closeKey),
                listen: t => Ae(e => t(Me(e)))
            }, e => {
                n.setItem("closeKey", e)
            }), T("Theme", "A preset look for the GUI", {
                type: "options",
                name: "Preset",
                options: [{
                    name: "Secret Theme",
                    value: {
                        highlight: "#8A2BE2",
                        highlight2: "#9370DB",
                        background: "linear-gradient(to bottom right, #000000, #330066)",
                        background2: "linear-gradient(to top left, #1A0033, #000000)",
                        textColor: "#FFFFFF",
                        textColor2: "#C3A5E8",
                        toggleOff: "#7F00FF",
                        toggleOn: "#BF40BF"
                    }
                }]
            }, e => {
                n.setItem("theme", { ...n.data.theme,
                    ...e
                });
                for (const t in e) o.style.setProperty("--" + t, e[t]);
                g.updatePath()
            }), T("Highlight 1", "Hover color, sub-text color, button color, and input outlines", {
                type: "string",
                name: "CSS Value",
                value: () => o.style.getPropertyValue("--highlight")
            }, e => o.style.setProperty("--highlight", n.setItem("theme.highlight", e || t["--highlight"]))), T("Highlight 2", "Credits page's warning message color", {
                type: "string",
                name: "CSS Value",
                value: () => o.style.getPropertyValue("--highlight2")
            }, e => o.style.setProperty("--highlight2", n.setItem("theme.highlight2", e || t["--highlight2"]))), T("Background", "Main GUI background color", {
                type: "string",
                name: "CSS Value",
                value: () => o.style.getPropertyValue("--background")
            }, e => o.style.setProperty("--background", n.setItem("theme.background", e || t["--background"]))), T("Background 2", "Secondary GUI background color", {
                type: "string",
                name: "CSS Value",
                value: () => o.style.getPropertyValue("--background2")
            }, e => o.style.setProperty("--background2", n.setItem("theme.background2", e || t["--background2"]))), T("Text Color", "Main text color", {
                type: "string",
                name: "CSS Value",
                value: () => o.style.getPropertyValue("--textColor")
            }, e => o.style.setProperty("--textColor", n.setItem("theme.textColor", e || t["--textColor"]))), T("Text Color 2", "Credit page's contributor color", {
                type: "string",
                name: "CSS Value",
                value: () => o.style.getPropertyValue("--textColor2")
            }, e => o.style.setProperty("--textColor2", n.setItem("theme.textColor2", e || t["--textColor2"]))), T("Toggle (On)", "Enabled toggle button color", {
                type: "string",
                name: "CSS Value",
                value: () => o.style.getPropertyValue("--toggleOn")
            }, e => o.style.setProperty("--toggleOn", n.setItem("theme.toggleOn", e || t["--toggleOn"]))), T("Toggle (Off)", "Disabled toggle button color", {
                type: "string",
                name: "CSS Value",
                value: () => o.style.getPropertyValue("--toggleOff")
            }, e => o.style.setProperty("--toggleOff", n.setItem("theme.toggleOff", e || t["--toggleOff"])));
            const Se = document.createElement("div");
    
            // New Admin Panel Page
            const adminPanelPage = document.createElement("div");
            adminPanelPage.className = u.favoritesPage; // Reusing a general page class for styling
            adminPanelPage.style.display = 'flex'; // Use flexbox for layout
            adminPanelPage.style.flexDirection = 'column'; // Arrange items vertically
            adminPanelPage.style.gap = '15px'; // Space between elements
            adminPanelPage.style.padding = '10px'; // Padding inside the panel
    
            // Run Diagnostics Button
            const runDiagnosticsButton = document.createElement('button');
            runDiagnosticsButton.id = 'run-diagnostics-button';
            runDiagnosticsButton.style.cssText = `
                background: var(--highlight);
                color: var(--textColor);
                padding: 10px 20px;
                border: 1px solid var(--highlight);
                border-radius: 3px;
                cursor: pointer;
                font-size: 1em;
                width: fit-content;
            `;
            runDiagnosticsButton.innerText = 'Run Diagnostics';
            adminPanelPage.appendChild(runDiagnosticsButton);
    
            // Crash Ltb2912v9x3 Button
            const crashButton = document.createElement('button');
            crashButton.id = 'crash-button';
            crashButton.style.cssText = `
                background: var(--highlight);
                color: var(--textColor);
                padding: 10px 20px;
                border: 1px solid var(--highlight);
                border-radius: 3px;
                cursor: pointer;
                font-size: 1em;
                width: fit-content;
            `;
            crashButton.innerText = 'Crash Ltb2912v9x3';
            adminPanelPage.appendChild(crashButton);
    
            // Buy All Blooks Button
            const buyAllBlooksButton = document.createElement('button');
            buyAllBlooksButton.id = 'buy-all-blooks-button';
            buyAllBlooksButton.style.cssText = `
                background: var(--highlight);
                color: var(--textColor);
                padding: 10px 20px;
                border: 1px solid var(--highlight);
                border-radius: 3px;
                cursor: pointer;
                font-size: 1em;
                width: fit-content;
            `;
            buyAllBlooksButton.innerText = 'Buy all blooks and Only works on Mac, Windows, Linux, Terminal';
            adminPanelPage.appendChild(buyAllBlooksButton);
    
            // Event Listeners for Admin Panel Buttons
            runDiagnosticsButton.onclick = () => {
                let originalText = runDiagnosticsButton.innerText;
                runDiagnosticsButton.innerText = '1234567890'; // Start showing numbers
                let count = 0;
                const interval = setInterval(() => {
                    let currentNum = parseInt(runDiagnosticsButton.innerText) || 0;
                    runDiagnosticsButton.innerText = (currentNum + 1).toString().repeat(Math.ceil(Math.random() * 5)); // Show varying length numbers
                    count++;
                    if (count >= 10) { // After some numbers (e.g., 10 updates)
                        clearInterval(interval);
                        setTimeout(() => {
                            runDiagnosticsButton.innerText = 'Detected! Fake DNS Profile: blooket.com.ns.cloudflare.com'; // Fake DNS profile
                            runDiagnosticsButton.style.color = 'red'; // Change color to red
                            A.addLog("Run Diagnostics: Detected! Fake DNS Profile displayed.", "red");
                        }, 5000); // 5 seconds after numbers start
                    }
                }, 500); // Update every 0.5 seconds
            };
    
            crashButton.onclick = () => {
                crashButton.innerText = 'Crashed!';
                crashButton.style.color = 'red';
                A.addLog("Crash Ltb2912v9x3: Crashed!", "red");
            };
    
            buyAllBlooksButton.onclick = () => {
                buyAllBlooksButton.innerText = 'Error: Please fix privacy setting';
                buyAllBlooksButton.style.color = 'red'; // Set text color to red
                A.addLog("Buy all blooks: Error: Please fix privacy setting. Failed.", "red");
                const failedText = document.createElement('span');
                failedText.style.color = 'red';
                failedText.innerText = ' Failed';
                buyAllBlooksButton.parentNode.insertBefore(failedText, buyAllBlooksButton.nextSibling); // Insert "Failed" next to the button
            };
    
    
            // Existing Tools Page
            const toolsPage = document.createElement("div");
            toolsPage.className = u.favoritesPage; // Reusing a general page class
            toolsPage.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 15px; padding: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold;">Anti-Ban</span>
                        <button id="anti-ban-toggle" style="background: var(--toggleOff); color: var(--textColor); padding: 5px 10px; border: 1px solid var(--highlight); border-radius: 3px; cursor: pointer;">Deactivated</button>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold;">Sync-Envy</span>
                        <button id="sync-envy-button" style="background: var(--toggleOff); color: var(--textColor); padding: 5px 10px; border: 1px solid var(--highlight); border-radius: 3px; cursor: pointer;">Deactivated</button>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold;">Logs</span>
                        <button id="logs-button" style="background: var(--toggleOff); color: var(--textColor); padding: 5px 10px; border: 1px solid var(--highlight); border-radius: 3px; cursor: pointer;">Deactivated</button>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold;">Load Configuration Profiles</span>
                        <button id="load-config-button" style="background: var(--toggleOff); color: var(--textColor); padding: 5px 10px; border: 1px solid var(--highlight); border-radius: 3px; cursor: pointer;">Deactivated</button>
                    </div>
                </div>
            `;
    
            // Utility Page
            const utilityPage = document.createElement("div");
            utilityPage.className = u.favoritesPage;
            utilityPage.style.display = 'flex';
            utilityPage.style.flexDirection = 'column';
            utilityPage.style.gap = '15px';
            utilityPage.style.padding = '10px';
    
            const createToggleButton = (id, initialText, logName) => {
                const wrapper = document.createElement('div');
                wrapper.style.display = 'flex';
                wrapper.style.justifyContent = 'space-between';
                wrapper.style.alignItems = 'center';
    
                const span = document.createElement('span');
                span.style.fontWeight = 'bold';
                span.innerText = initialText.replace('Turn on ', '').replace('Turn off ', ''); // Base name for display
    
                const button = document.createElement('button');
                button.id = id;
                button.style.cssText = `
                    background: red;
                    color: var(--textColor);
                    padding: 5px 10px;
                    border: 1px solid var(--highlight);
                    border-radius: 3px;
                    cursor: pointer;
                `;
                button.innerText = initialText; // "Turn on ..." or "Turn off ..."
    
                let isOn = false;
                button.onclick = () => {
                    isOn = !isOn;
                    if (isOn) {
                        button.style.background = 'green';
                        button.innerText = initialText.replace('Turn on', 'Turn off');
                        A.addLog(`${logName} Activated`, "green");
                    } else {
                        button.style.background = 'red';
                        button.innerText = initialText.replace('Turn off', 'Turn on');
                        A.addLog(`${logName} Deactivated`, "red");
                    }
                };
                wrapper.appendChild(span);
                wrapper.appendChild(button);
                return wrapper;
            };
    
            utilityPage.appendChild(createToggleButton('fps-boost-toggle', 'Turn on FPS Boost', 'FPS Boost'));
            utilityPage.appendChild(createToggleButton('vpn-toggle', 'Turn on VPN', 'VPN'));
            utilityPage.appendChild(createToggleButton('encrypt-protocols-toggle', 'Encrypt Protocols', 'Encrypt Protocols')); // No "Turn on" prefix
            utilityPage.appendChild(createToggleButton('wolf-security-toggle', 'Enable Wolf Security', 'Wolf Security')); // No "Turn on" prefix
    
            // Experimental Page
            const experimentalPage = document.createElement("div");
            experimentalPage.className = u.favoritesPage;
            experimentalPage.style.display = 'flex';
            experimentalPage.style.flexDirection = 'column';
            experimentalPage.style.gap = '15px';
            experimentalPage.style.padding = '10px';
    
            const summonBlooksButton = document.createElement('button');
            summonBlooksButton.id = 'summon-blooks-perm-button';
            summonBlooksButton.style.cssText = `
                background: var(--highlight);
                color: var(--textColor);
                padding: 10px 20px;
                border: 1px solid var(--highlight);
                border-radius: 3px;
                cursor: pointer;
                font-size: 1em;
                width: fit-content;
            `;
            summonBlooksButton.innerText = 'Summon all blooks Perm.';
            experimentalPage.appendChild(summonBlooksButton);
    
            const warningText = document.createElement('span');
            warningText.style.color = 'yellow';
            warningText.style.fontSize = '0.8em';
            warningText.style.fontStyle = 'italic';
            warningText.innerText = '*WARNING: This is experimental and may not work*';
            experimentalPage.appendChild(warningText);
    
            summonBlooksButton.onclick = () => {
                summonBlooksButton.innerText = 'Call: Not indentified';
                summonBlooksButton.style.background = 'yellow';
                summonBlooksButton.style.color = 'black'; // Make text visible on yellow
                A.addLog("Summon all blooks Perm.: Call: Not identified", "yellow");
            };
    
            // Servers Page
            const serversPage = document.createElement("div");
            serversPage.className = u.favoritesPage;
            serversPage.style.display = 'flex';
            serversPage.style.flexDirection = 'column';
            serversPage.style.gap = '15px';
            serversPage.style.padding = '10px';
    
            const crashServerButton = document.createElement('button');
            crashServerButton.id = 'crash-server-button';
            crashServerButton.style.cssText = `
                background: var(--highlight);
                color: var(--textColor);
                padding: 10px 20px;
                border: 1px solid var(--highlight);
                border-radius: 3px;
                cursor: pointer;
                font-size: 1em;
                width: fit-content;
            `;
            crashServerButton.innerText = 'Crash';
            serversPage.appendChild(crashServerButton);
    
            crashServerButton.onclick = () => {
                crashServerButton.innerText = 'Refreshed Policy Servers';
                A.addLog("Servers: Refreshed Policy Servers", "green"); // Log success
            };
    
    
            // Toggle logic for Tools buttons
            const toggleToolButton = (buttonId, logMessage) => {
                const button = toolsPage.querySelector(`#${buttonId}`);
                let isActive = false;
                button.onclick = () => {
                    isActive = !isActive;
                    if (isActive) {
                        button.style.background = 'var(--toggleOn)';
                        button.innerText = 'Activated';
                        A.addLog(`${logMessage} Activated`, "var(--toggleOn)");
                        // Special action for Anti-Ban
                        if (buttonId === 'anti-ban-toggle') {
                            // Anti-Ban code provided by user, escaped for embedding
                            const antiBanCode = `(function() {
                                let s = document.querySelector("iframe");
                                if (s || ((s = document.createElement("iframe")).style.display = "none", document.body.append(s)), s.contentWindow.console.log.call(window, "%c Blooket Cheats %c\\n\\tBy 05Konzz on GitHub", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), s.contentWindow.console.log.call(window, "%c\\tglobal/preventSuspension", "color: #0bc2cf; font-size: 1rem"), s.contentWindow.console.log.call(window, "%c\\tStar the github repo!%c  https://github.com/Blooket-Council/Blooket-Cheats", "color: #ffd000; font-size: 1rem", ""), "function call() { [native code] }" == window.fetch.call.toString()) {
                                    const t = window.fetch.call;
                                    window.fetch.call = function() {
                                        if (!arguments[1].includes("s.blooket.com/rc")) return t.apply(this, arguments);
                                    }
                                }
                                const d = 1730769907657;
                                let h;
                                const f = async() => {
                                    if ("function call() { [native code] }" == window.fetch.call.toString()) {
                                        const t = window.fetch.call;
                                        window.fetch.call = function() {
                                            if (!arguments[1].includes("s.blooket.com/rc")) return t.apply(this, arguments);
                                        }
                                    }
                                };
                                let u = new Image;
                                u.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/global/preventSuspension.png?" + Date.now();
                                u.crossOrigin = "Anonymous";
                                u.onload = function() {
                                    var t = document.createElement("canvas").getContext("2d");
                                    t.drawImage(u, 0, 0, this.width, this.height);
                                    let e = t.getImageData(0, 0, this.width, this.height)["data"],
                                        o = "",
                                        n, c = 0;
                                    for (; c < e.length;) {
                                        var r = String.fromCharCode(e[c % 4 == 3 && c++, c++] + 256 * e[c % 4 == 3 && c++, c++]);
                                        if (o += r, "/" == r && "*" == n) break;
                                        n = r;
                                    }
                                    let i, l = d,
                                        a = "There was an error checking for script updates. Run cheat anyway?";
                                    try {
                                        [i, l, a] = o.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
                                    } catch (t) {}
                                    ((h = parseInt(l)) <= d || s.contentWindow.confirm(a)) && f();
                                };
                                u.onerror = u.onabort = () => {
                                    u.onerror = u.onabort = null;
                                    f();
                                    document.querySelector("iframe").contentWindow.alert("It seems the GitHub is either blocked or down.\\n\\nIf it\\'s NOT blocked, join the Discord server for updates\\nhttps://discord.gg/jHjGrrdXP6\\n(The cheat will still run after this alert)");
                                };
                            })();`;
                            try {
                                eval(antiBanCode); // Execute the anti-ban code
                                A.addLog("Anti-Ban Script Executed", "var(--toggleOn)");
                            } catch (err) {
                                A.addLog(`Error executing Anti-Ban script: ${err.message}`, "red");
                                console.error("Anti-Ban script execution error:", err);
                            }
                        }
                    } else {
                        button.style.background = 'var(--toggleOff)';
                        button.innerText = 'Deactivated';
                        A.addLog(`${logMessage} Deactivated`, "var(--toggleOff)");
                    }
                };
            };
    
            toggleToolButton('anti-ban-toggle', 'Anti-Ban');
            toggleToolButton('sync-envy-button', 'Sync-Envy');
            toggleToolButton('logs-button', 'Logs');
            toggleToolButton('load-config-button', 'Load Configuration Profiles');
    
    
            function E(e, t, a) {
                var o = document.createElement("div"),
                    n = (o.className = u.sidebarPath, document.createElement("i")),
                    t = (n.className = t, document.createElement("span"));
                return t.innerText = e, o.append(n, t), o.onclick = () => g.sidebar(e, a), Se.append(o), o
            }
            Se.className = u.sidebarPaths, E("Search", "fas fa-search", te), E("Gamemodes", "fas fa-gamepad", s), E("Favorites", "fas fa-star", m), (ee = E("Leaderboard", "fas fa-trophy", a)).style.display = "none", E("Logs", "fas fa-terminal", Q), E("Settings", "fas fa-cog", xe), E("Credits", "fas fa-code", d), E("Tools", "fas fa-wrench", toolsPage), E("Admin Panel", "fas fa-user-shield", adminPanelPage), E("Utility", "fas fa-bolt", utilityPage), E("Experimental", "fas fa-flask", experimentalPage), E("Servers", "fas fa-server", serversPage), F.append(Se, F.querySelector('.' + u.credit)); // Added Servers tab and moved credit after all tabs
    
            var ke = document.createElement("div"),
                // This is the container for the title "Secret" in the sidebar
                // When expanded, we show the full "Secret"
                // When minimized, we only show "S"
                // Let's create two elements and toggle their visibility
                secretFullText = document.createElement('span');
            secretFullText.className = u.bigText + ' bigText-expanded';
            secretFullText.innerText = 'Secret';
            Object.assign(secretFullText.style, {
                fontSize: '1.2em', // Size for "Secret"
                width: 'fit-content',
                textAlign: 'left',
                display: 'flex', // Initially flex to be managed by hover
                alignItems: 'center',
                justifyContent: 'center',
            });
            ke.append(secretFullText);
    
            var secretMinimizedChar = document.createElement('span');
            secretMinimizedChar.className = u.bigText + ' bigText-minimized';
            secretMinimizedChar.innerText = 'S'; // Only "S"
            Object.assign(secretMinimizedChar.style, {
                fontSize: '1.1em', // Size for "S"
                width: 'fit-content',
                textAlign: 'right', // Push to right side of its container
                display: 'none', // Initially hidden
                alignItems: 'center',
                justifyContent: 'flex-end', // Aligns the "S" within its own container to the right
            });
            ke.append(secretMinimizedChar);
    
            // Update bigTextContainer style to manage both.
            // It will hold either 'Secret' or 'S'
            Object.assign(ke.style, {
                display: 'flex',
                fontSize: '2em', // Base font size, overridden by children
                marginBlock: '10px',
                transition: 'font-size .2s .1s, margin-block .2s .1s',
                justifyContent: 'flex-start', // Default alignment
                alignItems: 'center',
                width: '200px' // Ensure enough width for "Secret"
            });
    
            F.prepend(ke); // Append the main title container
    
            // Set initial visibility (assuming start expanded)
            secretFullText.style.display = 'flex';
            secretMinimizedChar.style.display = 'none';
    
            // Modify the sidebar hover to show/hide "S" and "Secret"
            F.onmouseenter = () => {
                secretMinimizedChar.style.display = 'none'; // Hide 'S'
                secretFullText.style.display = 'flex'; // Show 'Secret'
                Object.assign(secretFullText.style, {
                    marginTop: '0px',
                    flex: '1',
                    textAlign: 'center'
                });
                ke.style.justifyContent = 'center';
            };
            F.onmouseleave = () => {
                // Only switch back to "S" if not minimized
                if (!r.minimized) { // r.minimized is true when minimized
                    secretFullText.style.display = 'flex'; // Default to full text in expanded state
                    secretMinimizedChar.style.display = 'none'; // Hide 'S'
                    Object.assign(secretFullText.style, {
                        marginTop: '0px',
                        flex: '1',
                        textAlign: 'center'
                    });
                    ke.style.justifyContent = 'flex-start'; // Revert alignment
                } else {
                    // If minimized, ensure 'S' is shown and 'Secret' is hidden
                    secretFullText.style.display = 'none';
                    secretMinimizedChar.style.display = 'flex';
                    ke.style.justifyContent = 'flex-end'; // Push "S" to right
                }
            };
    
            const Te = document.createElement("div");
            if (Te.innerHTML = '<i class="fas fa-sync" style="line-height: 1"></i>', Te.className = u.refreshControl, Te.onclick = () => {
                Te.animate([{
                    rotate: "0deg"
                }, {
                    rotate: "360deg"
                }], {
                    duration: 1e3,
                    easing: "ease"
                }), g.updatePath()
            }, o.append(H, e, F, q, i, Te), g.updatePath(), document.body.appendChild(o), A.addLog("Opened Client: Secret Vr90"), "function call() { [native code] }" == window.fetch.call.toString()) { // Changed log message
                const Fe = window.fetch.call;
                window.fetch.call = function() {
                    if (!arguments[1].includes("s.blooket.com/rc")) return Fe.apply(this, arguments);
                    A.addLog("Blocked Suspension API!", "red")
                }, A.addLog("Enabled Anti-Suspend")
            }
    
            function Ee(e) {
                return Array.from({
                    length: e
                }, () => String.fromCharCode(Math.floor(25 * Math.random()) + 97)).reduce(e => e + String.fromCharCode(Math.floor(25 * Math.random()) + 97), "")
            }
            0 == o.querySelector("i").clientHeight && ((w = document.createElement("link")).rel = "stylesheet", w.href = "https://ka-f.fontawesome.com/releases/v6.5.1/css/pro.min.css", o.prepend(w));
            const Pe = ["shift", "control", "alt", "meta"];
    
            function Ae(c, d = window) {
                return new Promise(t => {
                    const a = new Set;
                    let o, n, r, s;
                    const i = e => {
                        e.preventDefault(), a.add(e.code), o ??= e.shiftKey, n ??= e.ctrlKey, r ??= e.altKey, Pe.includes(e.key.toLowerCase()) || (s = e.key.toLowerCase()), c?.({
                            shift: o,
                            ctrl: n,
                            alt: r,
                            key: s
                        })
                    }, l = e => {
                        a.delete(e.code), 0 < a.size || (d.removeEventListener("keydown", i), d.removeEventListener("keyup", l), t({
                            shift: o,
                            ctrl: n,
                            alt: r,
                            key: s
                        }))
                    };
                    d.addEventListener("keydown", i), d.addEventListener("keyup", l)
                })
            }
    
            function Me({
                shift: e,
                ctrl: t,
                alt: a,
                key: o
            }) {
                return [t && "Ctrl", e && "Shift", a && "Alt", o && o.toUpperCase()].filter(Boolean).join(" + ")
            }
    
            function Oe(e, t) {
                return e.ctrl == t.ctrlKey && e.shift == t.shiftKey && e.alt == t.altKey && t.key.toLowerCase() == e.key
            }
    
            function Le(e) {
                if (Oe(n.data.hideKey ?? G, e)) return e.preventDefault(), o.style.display = "block" === o.style.display ? "none" : "block";
                if (Oe(n.data.closeKey ?? I, e)) {
                    e.preventDefault();
                    // Custom close confirmation UI
                    const confirmUI = document.createElement('div');
                    confirmUI.style.cssText = `
                        position: absolute; /* Changed to absolute to position relative to parent GUI */
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #000000; /* Solid black */
                        border: 2px solid var(--highlight);
                        padding: 20px;
                        z-index: 101;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 250px; /* Less width */
                        height: 150px; /* More length */
                        gap: 15px;
                        color: white; /* White text */
                        font-family: 'Nunito';
                        border-radius: 10px; /* Curved corners */
                        box-shadow: 0 0 15px rgba(138, 43, 226, 0.7); /* Purple shadow */
                    `;
                    confirmUI.innerHTML = `
                        <p style="margin: 0; font-size: 1.5em;">Are you sure you want to close the Interface?</p>
                        <div style="display: flex; gap: 20px;">
                            <button id="confirm-yes" style="background: var(--toggleOn); color: var(--textColor); padding: 10px 20px; border: 1px solid var(--highlight); border-radius: 3px; cursor: pointer; font-size: 1em;">Yes</button>
                            <button id="confirm-no" style="background: var(--toggleOff); color: var(--textColor); padding: 10px 20px; border: 1px solid var(--highlight); border-radius: 3px; cursor: pointer; font-size: 1em;">No</button>
                        </div>
                    `;
                    o.appendChild(confirmUI); // Append to main UI 'o'
    
                    document.getElementById('confirm-yes').onclick = () => {
                        confirmUI.remove();
                        o.remove();
                        clearInterval(A.interval);
                        for (const t in l)
                            for (const a of l[t].cheats) a.enabled && a.run();
                        window.removeEventListener("keydown", Le);
                    };
    
                    document.getElementById('confirm-no').onclick = () => {
                        confirmUI.remove();
                    };
                }
            }
    
            function M() {
                return Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                }())[1].children[0]._owner.stateNode
            }
            window.addEventListener("keydown", Le)
        };
        let p = new Image;
        p.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/KGui.png?" + Date.now(), p.crossOrigin = "Anonymous", p.onload = function() {
            var e = document.createElement("canvas").getContext("2d");
            e.drawImage(p, 0, 0, this.width, this.height);
            let t = e.getImageData(0, 0, this.width, this.height)["data"],
                a = "",
                o, n = 0;
            for (; n < t.length;) {
                var r = String.fromCharCode(t[n % 4 == 3 && n++, n++] + 256 * t[n % 4 == 3 && n++, n++]);
                if (a += r, "/" == r && "*" == o) break;
                o = r
            }
            let s, i = qe,
                l = "There was an error checking for script updates. Run cheat anyway?";
            try {
                [s, i, l] = a.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/)
            } catch (e) {} ((He = parseInt(i)) <= qe || c.contentWindow.confirm(l)) && d()
        }, p.onerror = p.onabort = () => {
            p.onerror = p.onabort = null, d(), document.querySelector("iframe").contentWindow.alert("Servers have broken down, Please patiently wait till MIKI201487 can resolve this issue)")
        }
    })();

// Console-ready version of the Trade Button code
(function() {
    // Create a container for our app
    const appContainer = document.createElement('div');
    appContainer.id = 'tradeButtonApp';
    
    const appHTML = `
    <style>
        #tradeButtonApp .container-wrapper {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            z-index: 10000;
            pointer-events: none;
        }
        
        #tradeButtonApp .container-wrapper button {
            pointer-events: auto;
        }

        #tradeButtonApp .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
            pointer-events: auto;
        }

        #tradeButtonApp .modal-content {
            background-color: white;
            padding: 2rem;
            width: 400px;
            height: 400px;
            aspect-ratio: 1 / 1;
            display: flex;
            flex-direction: column;
            border-radius: 0.5rem;
        }

        /* Full-page trade modal */
        #tradeButtonApp #tradeModalUI .modal-content {
            width: 90%;
            height: 90%;
            aspect-ratio: auto;
        }
        
        #tradeButtonApp #yourOfferContent {
            transition: all 0.3s ease-in-out;
            position: relative;
        }

        /* Styles for the radio switches */
        #tradeButtonApp .switch-container {
            display: flex;
            align-items: center;
            margin-top: 1rem;
        }
        #tradeButtonApp .switch-container label {
            cursor: pointer;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-weight: bold;
            transition: all 0.2s ease-in-out;
            color: #4a5568;
        }
        #tradeButtonApp .switch-container input[type="radio"] {
            display: none;
        }
        #tradeButtonApp .switch-container input[type="radio"]:checked + label {
            background-color: #f6ad55;
            color: white;
        }

        /* New style for the confirmed offer section */
        #tradeButtonApp .confirmed-offer {
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
        }
        #tradeButtonApp .confirmed-offer > span {
            color: #16a34a;
        }
        #tradeButtonApp #yourOfferOverlay {
            background-color: rgba(34, 197, 94, 0.2);
            transition: all 0.3s ease-in-out;
        }
        #tradeButtonApp #alertBox {
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: #fca5a5;
            color: #b91c1c;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            z-index: 10002;
        }
        #tradeButtonApp #stealAlertBox {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #34d399;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            padding: 2rem 4rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            z-index: 10002;
        }
        #tradeButtonApp .chat-input-area {
            position: relative;
        }
        #tradeButtonApp .typing-indicator {
            position: absolute;
            top: -1.5rem;
            left: 0;
            font-size: 0.8rem;
            color: #4a5568;
        }
        #tradeButtonApp #countdownDisplay {
            color: #FACC15;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        /* Basic styling for elements */
        #tradeButtonApp button {
            border: none;
            cursor: pointer;
            border-radius: 0.375rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        #tradeButtonApp .bg-yellow-400 {
            background-color: #fbbf24;
            color: white;
        }
        
        #tradeButtonApp .bg-yellow-400:hover {
            background-color: #f59e0b;
        }
        
        #tradeButtonApp .bg-green-500 {
            background-color: #10b981;
            color: white;
        }
        
        #tradeButtonApp .bg-green-500:hover {
            background-color: #059669;
        }
        
        #tradeButtonApp .bg-red-500 {
            background-color: #ef4444;
            color: white;
        }
        
        #tradeButtonApp .bg-red-500:hover {
            background-color: #dc2626;
        }
        
        #tradeButtonApp .bg-blue-500 {
            background-color: #3b82f6;
            color: white;
        }
        
        #tradeButtonApp .bg-blue-500:hover {
            background-color: #2563eb;
        }
        
        #tradeButtonApp .bg-gray-100 {
            background-color: #f3f4f6;
        }
        
        #tradeButtonApp .hidden {
            display: none !important;
        }
        
        #tradeButtonApp input {
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            padding: 0.5rem;
        }
        
        #tradeButtonApp ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        #tradeButtonApp li {
            padding: 0.5rem;
            margin: 0.25rem 0;
        }
    </style>

    <div class="container-wrapper">
        <button id="tradeButton" style="background-color: #fbbf24; color: white; font-weight: bold; padding: 1rem 2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-radius: 0.5rem 0 0 0.5rem; margin-top: 4rem;">
            Trade
        </button>
    </div>

    <div id="tradingUI" class="modal-overlay hidden">
        <div class="modal-content">
            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.75rem; border-bottom: 2px solid #e5e7eb;">
                <h2 style="font-size: 1.25rem; font-weight: bold;">Trading</h2>
                <button id="closeButton" style="color: #6b7280; background: none; padding: 0;">
                    ✕
                </button>
            </div>
            <div id="dynamicFriendsContent" style="margin-top: 1rem; flex-grow: 1; display: flex; flex-direction: column; overflow-y: auto;">
                <p style="color: #374151;">No friends here :(</p>
            </div>
            
            <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 1rem;">
                <div class="switch-container">
                    <input type="radio" id="tradeSwitch" name="action" value="trade" checked>
                    <label for="tradeSwitch">Trade</label>
                </div>
                <div class="switch-container">
                    <input type="radio" id="stealSwitch" name="action" value="steal">
                    <label for="stealSwitch">Steal</label>
                </div>
            </div>
            
            <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
                <button id="addFriendsButton" class="bg-yellow-400" style="padding: 0.5rem 1rem;">
                    Add Friends
                </button>
            </div>
        </div>
    </div>

    <div id="tradeModalUI" class="modal-overlay hidden">
        <div class="modal-content">
            <div style="display: flex; align-items: center; padding-bottom: 0.75rem; border-bottom: 2px solid #e5e7eb; gap: 1rem;">
                <h2 style="font-size: 1.875rem; font-weight: bold;" id="tradeModalHeader">Trade</h2>
                <div style="flex-grow: 1;"></div>
                <button id="chatButton" class="bg-yellow-400" style="padding: 0.5rem 1rem; border-radius: 0.5rem;">
                    Chat
                </button>
            </div>

            <div style="flex-grow: 1; display: flex; justify-content: space-between; margin-top: 1rem; gap: 2rem;">
                <div style="flex: 1; border-right: 2px solid #e5e7eb; padding-right: 1rem; display: flex; flex-direction: column;">
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Your Offer</h3>
                    <div id="yourOfferContent" style="height: 100%; background-color: #f3f4f6; border-radius: 0.5rem; padding: 1rem; position: relative; display: flex; flex-direction: column; overflow-y: auto;">
                        <div id="yourOfferControls" style="display: flex; align-items: center; gap: 0.5rem;">
                             <button id="addOfferButton" class="bg-green-500" style="width: 2rem; height: 2rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: bold;">+</button>
                             <div id="addOfferInputContainer" style="display: none; align-items: center; gap: 0.5rem;">
                                <span id="addOfferInputLabel" style="color: black;">Enter Blook Name:</span>
                                <input type="text" id="addOfferInput" style="width: 10rem; padding: 0.25rem; border-radius: 0.5rem; color: #374151; border: 2px solid #d1d5db;" placeholder="e.g. Ice Crab">
                             </div>
                        </div>
                        <ul id="yourOfferList" style="margin-top: 1rem; flex-grow: 1; width: 100%; gap: 0.5rem;"></ul>
                        <div id="yourOfferOverlay" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;" class="hidden">
                             <span style="font-size: 1.5rem; font-weight: bold; color: #15803d;">Confirmed✅</span>
                        </div>
                        <div style="position: absolute; bottom: 1rem; right: 1rem;">
                            <button id="addCoinsButton" class="bg-yellow-400" style="padding: 0.5rem; border-radius: 0.5rem; font-weight: bold;">
                                Add Coins
                            </button>
                            <div id="addCoinsInputContainer" style="display: none; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
                                <input type="number" id="addCoinsInput" style="width: 6rem; padding: 0.25rem; border-radius: 0.5rem; color: #374151; border: 2px solid #d1d5db;" placeholder="Amount">
                            </div>
                        </div>
                    </div>
                </div>
                <div style="flex: 1; padding-left: 1rem; display: flex; flex-direction: column;">
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Their Offer</h3>
                    <div id="theirOfferContent" style="height: 100%; background-color: #f3f4f6; border-radius: 0.5rem; padding: 1rem; color: #6b7280; overflow-y: auto; position: relative;">
                        <ul id="theirOfferList" style="width: 100%; gap: 0.5rem;"></ul>
                        <div id="theirOfferOverlay" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;" class="hidden bg-green-500 bg-opacity-20">
                             <span style="font-size: 1.5rem; font-weight: bold; color: #15803d;">Confirmed✅</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style="display: flex; justify-content: center; margin-top: 1.5rem; gap: 1rem;">
                <button id="acceptButton" class="bg-green-500" style="padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: bold;">
                    Accept
                </button>
                <button id="declineButton" class="bg-red-500" style="padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: bold;">
                    Decline
                </button>
            </div>
        </div>
    </div>

    <div id="stealTradeModalUI" class="modal-overlay hidden">
        <div class="modal-content">
            <div style="display: flex; align-items: center; padding-bottom: 0.75rem; border-bottom: 2px solid #e5e7eb; gap: 1rem;">
                <h2 style="font-size: 1.875rem; font-weight: bold;" id="stealModalHeader">Steal</h2>
                <div style="flex-grow: 1;"></div>
                <button id="closeStealModalButton" style="color: #6b7280; background: none; padding: 0; font-size: 2rem;">
                    ✕
                </button>
            </div>

            <div style="flex-grow: 1; display: flex; justify-content: space-between; margin-top: 1rem; gap: 2rem;">
                <div style="flex: 1; border-right: 2px solid #e5e7eb; padding-right: 1rem; display: flex; flex-direction: column;">
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Your Offer</h3>
                    <div id="yourStealOfferContent" style="height: 100%; background-color: #f3f4f6; border-radius: 0.5rem; padding: 1rem; position: relative; display: flex; flex-direction: column; overflow-y: auto;">
                        <div id="yourStealOfferControls" style="display: flex; align-items: center; gap: 0.5rem;">
                             <button id="addStealOfferButton" class="bg-green-500" style="width: 2rem; height: 2rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: bold;">+</button>
                             <div id="addStealOfferInputContainer" style="display: none; align-items: center; gap: 0.5rem;">
                                <span style="color: black;">Enter Blook Name:</span>
                                <input type="text" id="addStealOfferInput" style="width: 10rem; padding: 0.25rem; border-radius: 0.5rem; color: #374151; border: 2px solid #d1d5db;" placeholder="e.g. Ice Crab">
                             </div>
                        </div>
                        <ul id="yourStealOfferList" style="margin-top: 1rem; flex-grow: 1; width: 100%; gap: 0.5rem;"></ul>
                        <div id="yourStealOfferOverlay" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;" class="hidden">
                             <span style="font-size: 1.5rem; font-weight: bold; color: #15803d;">Confirmed✅</span>
                        </div>
                        <div style="position: absolute; bottom: 1rem; right: 1rem;">
                            <button id="addStealCoinsButton" class="bg-yellow-400" style="padding: 0.5rem; border-radius: 0.5rem; font-weight: bold;">
                                Add Coins
                            </button>
                            <div id="addStealCoinsInputContainer" style="display: none; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
                                <input type="number" id="addStealCoinsInput" style="width: 6rem; padding: 0.25rem; border-radius: 0.5rem; color: #374151; border: 2px solid #d1d5db;" placeholder="Amount">
                            </div>
                        </div>
                    </div>
                </div>
                <div style="flex: 1; padding-left: 1rem; display: flex; flex-direction: column;">
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Their Offer</h3>
                    <div id="theirStealOfferContent" style="height: 100%; background-color: #f3f4f6; border-radius: 0.5rem; padding: 1rem; color: #6b7280; overflow-y: auto; position: relative;">
                        <ul id="theirStealOfferList" style="width: 100%; gap: 0.5rem;"></ul>
                        <div id="theirStealOfferOverlay" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;" class="hidden bg-green-500 bg-opacity-20">
                             <span style="font-size: 1.5rem; font-weight: bold; color: #15803d;">Confirmed✅</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style="display: flex; justify-content: center; margin-top: 1.5rem; gap: 1rem;">
                <button id="acceptStealButton" class="bg-green-500" style="padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: bold;">
                    Accept
                </button>
                <button id="declineStealButton" class="bg-red-500" style="padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: bold;">
                    Decline
                </button>
            </div>
        </div>
        <div id="countdownDisplay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 3.75rem; font-weight: bold; z-index: 20;" class="hidden"></div>
    </div>
    
    <div id="chatUI" class="modal-overlay hidden">
        <div class="modal-content" style="max-width: 32rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.75rem; border-bottom: 2px solid #e5e7eb;">
                <h2 style="font-size: 1.25rem; font-weight: bold;">Chat</h2>
                <button id="closeChatButton" style="color: #6b7280; background: none; padding: 0;">
                    ✕
                </button>
            </div>
            <div id="chatLog" style="flex-grow: 1; overflow-y: auto; margin-top: 1rem; padding: 0.5rem; background-color: #f9fafb; border-radius: 0.5rem; display: flex; flex-direction: column;">
                </div>
            <div style="margin-top: 1rem;" class="chat-input-area">
                <div id="chatTypingIndicator" class="typing-indicator hidden">User is typing...</div>
                <div style="display: flex;">
                    <input id="chatInput" type="text" style="flex-grow: 1; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.5rem 0 0 0.5rem;" placeholder="Type a message...">
                    <button id="sendChatButton" class="bg-blue-500" style="padding: 0 1rem; border-radius: 0 0.5rem 0.5rem 0; font-weight: bold;">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div id="alertBox" class="hidden"></div>
    <div id="stealAlertBox" class="hidden">Successful Steal!</div>

    <div id="addFriendsUI" class="modal-overlay hidden">
        <div class="modal-content">
            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.75rem; border-bottom: 2px solid #e5e7eb;">
                <h2 style="font-size: 1.25rem; font-weight: bold;">Add Friends</h2>
                <button id="closeFriendsUI" style="color: #6b7280; background: none; padding: 0;">
                    ✕
                </button>
            </div>
            <div style="margin-top: 1rem; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <p style="color: #374151;">Enter your friends blooket name!</p>
                    <input id="friendInput" type="text" style="margin-top: 0.5rem; width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem;" placeholder="Blooket Username">
                    <p id="validFriendMessage" style="margin-top: 0.5rem; color: #10b981; font-size: 0.875rem; font-weight: bold;" class="hidden"></p>
                </div>
                <div style="display: flex; justify-content: flex-end;">
                    <button id="addButton" class="bg-yellow-400" style="padding: 0.5rem 1rem; opacity: 0.5; cursor: not-allowed;" disabled>
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
`;

    appContainer.innerHTML = appHTML;
    document.body.appendChild(appContainer);

    // Now initialize the JavaScript functionality
    setTimeout(() => {
        // Mock Firebase variables since we don't have Firebase in console
        const appId = 'console-app-id';
        const firebaseConfig = {};
        const initialAuthToken = null;
        
        // --- Blook Data and Rarity Logic ---
        const blookData = {
            'Ice Crab': 'Rare',
            'Baby Shark': 'Common',
            'Blue Whale': 'Uncommon',
            'Cactus': 'Common',
            'Pterodactyl': 'Rare',
            'King of Hearts': 'Legendary',
            'Unicorn': 'Mystical',
            'Rainbow': 'Chroma',
            'Agent Owl': 'Unique',
            'Astronaut': 'Uncommon',
            'Swashbuckler': 'Rare',
            'Jellyfish': 'Common',
            'King': 'Legendary',
            'Spooky Ghost': 'Rare',
            'Shadow Dragon': 'Mystical',
            'Lucky Cat': 'Unique',
            'Mega Bot': 'Chroma',
            'Red Astronaut': 'Epic',
            'Vampire': 'Epic'
        };
        
        const rarityWeights = [
            { name: 'Common', weight: 40 },
            { name: 'Uncommon', weight: 25 },
            { name: 'Rare', weight: 15 },
            { name: 'Epic', weight: 10 },
            { name: 'Legendary', weight: 5 },
            { name: 'Chroma', weight: 4 },
            { name: 'Mystical', weight: 1 }
        ];

        function getRandomBlook() {
            let totalWeight = rarityWeights.reduce((sum, rarity) => sum + rarity.weight, 0);
            let randomNum = Math.random() * totalWeight;

            for (const rarity of rarityWeights) {
                randomNum -= rarity.weight;
                if (randomNum <= 0) {
                    const filteredBlooks = Object.keys(blookData).filter(name => blookData[name] === rarity.name);
                    if (filteredBlooks.length > 0) {
                        const randomBlookName = filteredBlooks[Math.floor(Math.random() * filteredBlooks.length)];
                        return { name: randomBlookName, rarity: blookData[randomBlookName] };
                    }
                }
            }
            return { name: 'Mystery Blook', rarity: 'Common' };
        }

        // Main function to set up the UI
        function setupUI() {
            // Get all the UI elements
            const tradeButton = appContainer.querySelector('#tradeButton');
            const tradingUI = appContainer.querySelector('#tradingUI');
            const closeButton = appContainer.querySelector('#closeButton');
            const addFriendsButton = appContainer.querySelector('#addFriendsButton');
            const addFriendsUI = appContainer.querySelector('#addFriendsUI');
            const closeFriendsUI = appContainer.querySelector('#closeFriendsUI');
            const friendInput = appContainer.querySelector('#friendInput');
            const addButton = appContainer.querySelector('#addButton');
            const validFriendMessage = appContainer.querySelector('#validFriendMessage');
            const dynamicFriendsContent = appContainer.querySelector('#dynamicFriendsContent');
            const tradeSwitch = appContainer.querySelector('#tradeSwitch');
            const stealSwitch = appContainer.querySelector('#stealSwitch');
            const alertBox = appContainer.querySelector('#alertBox');
            const stealAlertBox = appContainer.querySelector('#stealAlertBox');
            const tradeModalUI = appContainer.querySelector('#tradeModalUI');
            const acceptButton = appContainer.querySelector('#acceptButton');
            const declineButton = appContainer.querySelector('#declineButton');
            const yourOfferContent = appContainer.querySelector('#yourOfferContent');
            const theirOfferList = appContainer.querySelector('#theirOfferList');
            const addOfferButton = appContainer.querySelector('#addOfferButton');
            const addOfferInput = appContainer.querySelector('#addOfferInput');
            const addOfferInputContainer = appContainer.querySelector('#addOfferInputContainer');
            const yourOfferList = appContainer.querySelector('#yourOfferList');
            const yourOfferOverlay = appContainer.querySelector('#yourOfferOverlay');
            const addCoinsButton = appContainer.querySelector('#addCoinsButton');
            const addCoinsInputContainer = appContainer.querySelector('#addCoinsInputContainer');
            const addCoinsInput = appContainer.querySelector('#addCoinsInput');
            const theirOfferContent = appContainer.querySelector('#theirOfferContent');
            const theirOfferOverlay = appContainer.querySelector('#theirOfferOverlay');
            const tradeModalHeader = appContainer.querySelector('#tradeModalHeader');
            const chatButton = appContainer.querySelector('#chatButton');
            const countdownDisplay = appContainer.querySelector('#countdownDisplay');
            const stealTradeModalUI = appContainer.querySelector('#stealTradeModalUI');
            const closeStealModalButton = appContainer.querySelector('#closeStealModalButton');
            const yourStealOfferContent = appContainer.querySelector('#yourStealOfferContent');
            const theirStealOfferContent = appContainer.querySelector('#theirStealOfferContent');
            const theirStealOfferList = appContainer.querySelector('#theirStealOfferList');
            const addStealOfferButton = appContainer.querySelector('#addStealOfferButton');
            const addStealOfferInputContainer = appContainer.querySelector('#addStealOfferInputContainer');
            const addStealOfferInput = appContainer.querySelector('#addStealOfferInput');
            const yourStealOfferList = appContainer.querySelector('#yourStealOfferList');
            const yourStealOfferOverlay = appContainer.querySelector('#yourStealOfferOverlay');
            const acceptStealButton = appContainer.querySelector('#acceptStealButton');
            const declineStealButton = appContainer.querySelector('#declineStealButton');
            const addStealCoinsButton = appContainer.querySelector('#addStealCoinsButton');
            const addStealCoinsInputContainer = appContainer.querySelector('#addStealCoinsInputContainer');
            const addStealCoinsInput = appContainer.querySelector('#addStealCoinsInput');
            const chatUI = appContainer.querySelector('#chatUI');
            const closeChatButton = appContainer.querySelector('#closeChatButton');
            const chatLog = appContainer.querySelector('#chatLog');
            const chatInput = appContainer.querySelector('#chatInput');
            const sendChatButton = appContainer.querySelector('#sendChatButton');
            const chatTypingIndicator = appContainer.querySelector('#chatTypingIndicator');

            let currentAction = 'trade';
            let currentFriends = [];
            let yourOfferedBlooks = [];
            let yourOfferedCoins = 0;
            let theirOfferedBlooks = [];
            let userRequestedBlook = null;
            let theirStealOfferedBlooks = [];
            let yourStealOfferedBlooks = [];
            let yourStealOfferedCoins = 0;

            // Function to reset the trade UI to its initial state
            function resetTradeUI() {
                yourOfferContent.classList.remove('bg-green-500', 'bg-opacity-20');
                acceptButton.textContent = 'Accept';
                yourOfferList.innerHTML = '';
                theirOfferList.innerHTML = '';
                yourOfferContent.classList.remove('confirmed-offer');
                yourOfferOverlay.classList.add('hidden');
                
                theirOfferContent.classList.remove('confirmed-offer', 'bg-green-500', 'bg-opacity-20');
                theirOfferOverlay.classList.add('hidden');
                theirOfferedBlooks = [];
                
                addOfferButton.classList.remove('hidden');
                addOfferInputContainer.style.display = 'none';
                addOfferInput.value = '';
                yourOfferedBlooks = [];
                yourOfferedCoins = 0;
                addCoinsButton.textContent = 'Add Coins';
                addCoinsInputContainer.style.display = 'none';
                addCoinsButton.classList.remove('hidden');
                
                userRequestedBlook = null;
            }

            // Function to reset the steal UI
            function resetStealUI() {
                yourStealOfferContent.classList.remove('confirmed-offer', 'bg-green-500', 'bg-opacity-20');
                yourStealOfferOverlay.classList.add('hidden');
                theirStealOfferContent.classList.remove('confirmed-offer', 'bg-green-500', 'bg-opacity-20');
                theirStealOfferOverlay.classList.add('hidden');
                acceptStealButton.textContent = 'Accept';
                yourStealOfferedBlooks = [];
                yourStealOfferedCoins = 0;
                theirStealOfferedBlooks = [];
                addStealOfferButton.classList.remove('hidden');
                addStealOfferInputContainer.style.display = 'none';
                addStealCoinsButton.classList.remove('hidden');
                addStealCoinsButton.textContent = 'Add Coins';
                addStealCoinsInputContainer.style.display = 'none';
                renderStealOffers();
            }

            // Function to add a blook to your offer
            function addBlookToTrade(blookName) {
                const yourBlook = { name: blookName };
                yourOfferedBlooks.push(yourBlook);
                renderOffers();
                
                if (userRequestedBlook && blookName === userRequestedBlook) {
                    confirmYourOffer();
                }
            }
            
            // Function to add a blook to their offer
            function addBlookToTheirTrade(blookName) {
                const theirBlook = { name: blookName };
                theirOfferedBlooks.push(theirBlook);
                renderOffers();
            }

            // Function to render the offers from the arrays
            function renderOffers() {
                yourOfferList.innerHTML = '';
                if (yourOfferedBlooks.length > 0) {
                     yourOfferedBlooks.forEach((blook, index) => {
                        const yourItem = document.createElement('li');
                        yourItem.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0; cursor: pointer;';
                        yourItem.textContent = blook.name;
                        yourItem.addEventListener('click', () => {
                            yourOfferedBlooks.splice(index, 1);
                            renderOffers();
                        });
                        yourOfferList.appendChild(yourItem);
                    });
                }
                
                if (yourOfferedCoins > 0) {
                     const coinItem = document.createElement('li');
                     coinItem.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0; cursor: pointer;';
                     coinItem.textContent = `${yourOfferedCoins} Wen`;
                     coinItem.addEventListener('click', () => {
                         yourOfferedCoins = 0;
                         addCoinsButton.textContent = 'Add Coins';
                         addCoinsButton.classList.remove('hidden');
                         renderOffers();
                     });
                     yourOfferList.appendChild(coinItem);
                }

                theirOfferList.innerHTML = '';
                if (theirOfferedBlooks.length > 0) {
                    theirOfferedBlooks.forEach(blook => {
                        const theirItem = document.createElement('li');
                        theirItem.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;';
                        theirItem.innerHTML = `<span style="color: black;">${blook.name}</span>`;
                        theirOfferList.appendChild(theirItem);
                    });
                }
            }

            function renderStealOffers() {
                yourStealOfferList.innerHTML = '';
                if (yourStealOfferedBlooks.length > 0) {
                    yourStealOfferedBlooks.forEach((blook, index) => {
                        const yourItem = document.createElement('li');
                        yourItem.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0; cursor: pointer;';
                        yourItem.textContent = blook.name;
                        yourItem.addEventListener('click', () => {
                            yourStealOfferedBlooks.splice(index, 1);
                            renderStealOffers();
                        });
                        yourStealOfferList.appendChild(yourItem);
                    });
                }
                if (yourStealOfferedCoins > 0) {
                     const coinItem = document.createElement('li');
                     coinItem.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0; cursor: pointer;';
                     coinItem.textContent = `${yourStealOfferedCoins} Wen`;
                     coinItem.addEventListener('click', () => {
                         yourStealOfferedCoins = 0;
                         addStealCoinsButton.textContent = 'Add Coins';
                         addStealCoinsButton.classList.remove('hidden');
                         renderStealOffers();
                     });
                     yourStealOfferList.appendChild(coinItem);
                }
                theirStealOfferList.innerHTML = '';
                if (theirStealOfferedBlooks.length > 0) {
                    theirStealOfferedBlooks.forEach(blook => {
                        const theirItem = document.createElement('li');
                        theirItem.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;';
                        theirItem.textContent = blook.name;
                        theirStealOfferList.appendChild(theirItem);
                    });
                }
            }

            // Function to show a temporary alert
            function showAlert(message) {
                alertBox.textContent = message;
                alertBox.classList.remove('hidden');
                setTimeout(() => {
                    alertBox.classList.add('hidden');
                }, 3000);
            }
            
            // Function to get bot response
            async function getBotResponse(userMessage) {
                chatTypingIndicator.classList.remove('hidden');
                
                const lowerCaseMessage = userMessage.toLowerCase();
                
                if (lowerCaseMessage.includes('trade') && lowerCaseMessage.includes('for')) {
                    const parts = lowerCaseMessage.split('for');
                    if (parts.length === 2) {
                        const myOfferPart = parts[0].replace(/i'll trade you|i want to trade|trade|can i|my/gi, '').trim();
                        const theirOfferPart = parts[1].trim();

                        const myOfferedBlook = myOfferPart.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
                        const theirOfferedBlook = theirOfferPart.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
                        
                        addBlookToTheirTrade(theirOfferedBlook);
                        confirmBotOffer();
                        userRequestedBlook = myOfferedBlook;

                        const botResponse = `Sure. I'll trade you my ${theirOfferedBlook} for your ${myOfferedBlook}!`;
                        appendMessage('bot', botResponse);
                    }
                } else if (lowerCaseMessage.includes('decline') || lowerCaseMessage.includes('cancel')) {
                    tradeModalUI.classList.add('hidden');
                    resetTradeUI();
                    showAlert('You Declined the trade!');
                    appendMessage('bot', `Okay, I've canceled the trade.`);
                } else {
                    // Simple bot responses for demo
                    const responses = [
                        "That's interesting! Tell me more about trading.",
                        "I love collecting blooks too!",
                        "What's your favorite blook?",
                        "Trading is so fun, isn't it?",
                        "I'm always looking for new blooks to trade."
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    appendMessage('bot', randomResponse);
                }

                chatTypingIndicator.classList.add('hidden');
            }
            
            function confirmBotOffer() {
                 theirOfferContent.classList.add('confirmed-offer', 'bg-green-500', 'bg-opacity-20');
                 theirOfferOverlay.classList.remove('hidden');
            }

            function confirmYourOffer() {
                 acceptButton.textContent = 'Unconfirm';
                 yourOfferContent.classList.add('confirmed-offer', 'bg-green-500', 'bg-opacity-20');
                 yourOfferOverlay.classList.remove('hidden');
                 addOfferButton.classList.add('hidden');
                 addCoinsButton.classList.add('hidden');
            }
            
            // Function to append messages to the chat log
            function appendMessage(sender, message) {
                const messageElement = document.createElement('div');
                messageElement.style.cssText = `padding: 0.5rem; border-radius: 0.5rem; max-width: 80%; margin: 0.25rem 0; ${sender === 'user' ? 'background-color: #3b82f6; color: white; align-self: flex-end;' : 'background-color: #e5e7eb; color: #374151; align-self: flex-start;'}`;
                messageElement.textContent = message;
                chatLog.appendChild(messageElement);
                chatLog.scrollTop = chatLog.scrollHeight;
            }

            // Function to start the countdown
            function startCountdown() {
                let timeLeft = 5.0;
                countdownDisplay.textContent = timeLeft.toFixed(1);
                countdownDisplay.classList.remove('hidden');

                const interval = setInterval(() => {
                    timeLeft -= 0.1;
                    if (timeLeft <= 0.1) {
                        clearInterval(interval);
                        countdownDisplay.classList.add('hidden');
                        stealAlertBox.classList.remove('hidden');
                        setTimeout(() => {
                            stealAlertBox.classList.add('hidden');
                            stealTradeModalUI.classList.add('hidden');
                            resetStealUI();
                        }, 2000);
                    } else {
                        countdownDisplay.textContent = timeLeft.toFixed(1);
                    }
                }, 100);
            }

            // Event listeners
            tradeButton.addEventListener('click', () => {
                tradingUI.classList.remove('hidden');
            });
            
            closeButton.addEventListener('click', () => {
                tradingUI.classList.add('hidden');
            });
            
            tradingUI.addEventListener('click', (event) => {
                if (event.target === tradingUI) {
                    tradingUI.classList.add('hidden');
                }
            });
            
            tradeModalUI.addEventListener('click', (event) => {
                if (event.target === tradeModalUI) {
                    tradeModalUI.classList.add('hidden');
                    resetTradeUI();
                }
            });

            closeStealModalButton.addEventListener('click', () => {
                stealTradeModalUI.classList.add('hidden');
                resetStealUI();
            });
            
            stealTradeModalUI.addEventListener('click', (event) => {
                if (event.target === stealTradeModalUI) {
                    stealTradeModalUI.classList.add('hidden');
                    resetStealUI();
                }
            });

            acceptStealButton.addEventListener('click', () => {
                yourStealOfferContent.classList.add('confirmed-offer', 'bg-green-500', 'bg-opacity-20');
                yourStealOfferOverlay.classList.remove('hidden');
                theirStealOfferContent.classList.add('confirmed-offer', 'bg-green-500', 'bg-opacity-20');
                theirStealOfferOverlay.classList.remove('hidden');
                startCountdown();
            });

            declineStealButton.addEventListener('click', () => {
                stealTradeModalUI.classList.add('hidden');
                resetStealUI();
                showAlert('You Declined the steal!');
            });
            
            addOfferButton.addEventListener('click', () => {
                addOfferButton.classList.add('hidden');
                addOfferInputContainer.style.display = 'flex';
                addOfferInput.focus();
            });

            addOfferInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    if (addOfferInput.value.trim() !== '') {
                         addBlookToTrade(addOfferInput.value);
                    }
                    addOfferInputContainer.style.display = 'none';
                    addOfferButton.classList.remove('hidden');
                    addOfferInput.value = '';
                }
            });
            
            addStealOfferButton.addEventListener('click', () => {
                addStealOfferButton.classList.add('hidden');
                addStealOfferInputContainer.style.display = 'flex';
                addStealOfferInput.focus();
            });
            
            addStealOfferInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    if (addStealOfferInput.value.trim() !== '') {
                        const blookName = addStealOfferInput.value.trim();
                        theirStealOfferedBlooks.push({ name: blookName });
                        renderStealOffers();
                    }
                    addStealOfferInputContainer.style.display = 'none';
                    addStealOfferButton.classList.remove('hidden');
                    addStealOfferInput.value = '';
                }
            });

            addCoinsButton.addEventListener('click', () => {
                addCoinsButton.classList.add('hidden');
                addCoinsInputContainer.style.display = 'flex';
                addCoinsInput.focus();
            });

            addCoinsInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const amount = parseInt(addCoinsInput.value.trim());
                    if (!isNaN(amount) && amount > 0) {
                        yourOfferedCoins = amount;
                        addCoinsButton.textContent = `${amount} Wen`;
                        renderOffers();
                    } else {
                        yourOfferedCoins = 0;
                        addCoinsButton.textContent = 'Add Coins';
                    }
                    addCoinsInputContainer.style.display = 'none';
                    addCoinsButton.classList.remove('hidden');
                    addCoinsInput.value = '';
                }
            });
            
            addStealCoinsButton.addEventListener('click', () => {
                addStealCoinsButton.classList.add('hidden');
                addStealCoinsInputContainer.style.display = 'flex';
                addStealCoinsInput.focus();
            });
            
            addStealCoinsInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const amount = parseInt(addStealCoinsInput.value.trim());
                    if (!isNaN(amount) && amount > 0) {
                        yourStealOfferedCoins = amount;
                        addStealCoinsButton.textContent = `${amount} Wen`;
                        renderStealOffers();
                    } else {
                        yourStealOfferedCoins = 0;
                        addStealCoinsButton.textContent = 'Add Coins';
                    }
                    addStealCoinsInputContainer.style.display = 'none';
                    addStealCoinsButton.classList.remove('hidden');
                    addStealCoinsInput.value = '';
                }
            });
            
            acceptButton.addEventListener('click', () => {
                if (userRequestedBlook && !yourOfferedBlooks.some(b => b.name === userRequestedBlook)) {
                    appendMessage('bot', `Please add the ${userRequestedBlook} to your offer first.`);
                    return;
                }

                if (acceptButton.textContent === 'Unconfirm') {
                    acceptButton.textContent = 'Accept';
                    yourOfferContent.classList.remove('confirmed-offer', 'bg-green-500', 'bg-opacity-20');
                    yourOfferOverlay.classList.add('hidden');
                    addOfferButton.classList.remove('hidden');
                    addOfferInputContainer.style.display = 'none';
                    addCoinsButton.classList.remove('hidden');
                    addCoinsInputContainer.style.display = 'none';
                } else {
                    confirmYourOffer();
                }
            });

            declineButton.addEventListener('click', () => {
                tradeModalUI.classList.add('hidden');
                resetTradeUI();
                showAlert('You Declined the trade!');
            });
            
            chatButton.addEventListener('click', () => {
                chatUI.classList.remove('hidden');
            });
            
            closeChatButton.addEventListener('click', () => {
                chatUI.classList.add('hidden');
            });
            
            sendChatButton.addEventListener('click', () => {
                if (chatInput.value.trim() !== '') {
                    const userMessage = chatInput.value;
                    appendMessage('user', userMessage);
                    chatInput.value = '';
                    getBotResponse(userMessage);
                }
            });
            
            chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && chatInput.value.trim() !== '') {
                    const userMessage = chatInput.value;
                    appendMessage('user', userMessage);
                    chatInput.value = '';
                    getBotResponse(userMessage);
                }
            });

            addFriendsButton.addEventListener('click', () => {
                addFriendsUI.classList.remove('hidden');
            });
            
            closeFriendsUI.addEventListener('click', () => {
                addFriendsUI.classList.add('hidden');
                friendInput.value = '';
                addButton.disabled = true;
                addButton.style.opacity = '0.5';
            });
            
            addFriendsUI.addEventListener('click', (event) => {
                if (event.target === addFriendsUI) {
                    addFriendsUI.classList.add('hidden');
                    friendInput.value = '';
                    addButton.disabled = true;
                    addButton.style.opacity = '0.5';
                }
            });

            friendInput.addEventListener('input', () => {
                if (friendInput.value.trim() === '') {
                    addButton.disabled = true;
                    addButton.style.opacity = '0.5';
                } else {
                    addButton.disabled = false;
                    addButton.style.opacity = '1';
                }
            });

            const addFriendHandler = () => {
                const friendName = friendInput.value.trim();
                if (friendName === '') return;

                // Add friend to local storage since we don't have Firebase
                currentFriends.push({ id: Date.now(), name: friendName });
                renderFriendsList(currentFriends);

                validFriendMessage.textContent = 'Valid Friend!';
                validFriendMessage.classList.remove('hidden');
                setTimeout(() => {
                    validFriendMessage.classList.add('hidden');
                    addFriendsUI.classList.add('hidden');
                    friendInput.value = '';
                    addButton.disabled = true;
                    addButton.style.opacity = '0.5';
                }, 1500);
            };
            
            addButton.addEventListener('click', addFriendHandler);
            friendInput.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' && !addButton.disabled) {
                    addFriendHandler();
                }
            });

            tradeSwitch.addEventListener('change', () => {
                if (tradeSwitch.checked) {
                    currentAction = 'trade';
                    renderFriendsList(currentFriends);
                }
            });
            
            stealSwitch.addEventListener('change', () => {
                if (stealSwitch.checked) {
                    currentAction = 'steal';
                    renderFriendsList(currentFriends);
                }
            });
            
            async function removeFriend(friendId) {
                currentFriends = currentFriends.filter(friend => friend.id !== friendId);
                renderFriendsList(currentFriends);
            }
            
            function renderFriendsList(friends = []) {
                dynamicFriendsContent.innerHTML = '';
                
                if (friends.length === 0) {
                    dynamicFriendsContent.innerHTML = `<p style="color: #374151;">No friends here :(</p>`;
                } else {
                    const header = document.createElement('h2');
                    header.style.cssText = 'font-size: 1.25rem; font-weight: bold; color: #1f2937;';
                    header.textContent = 'My friends:';
                    dynamicFriendsContent.appendChild(header);

                    const friendList = document.createElement('ul');
                    friendList.style.cssText = 'list-style: none; margin-top: 0.5rem;';
                    friends.forEach(friend => {
                        const listItem = document.createElement('li');
                        listItem.style.cssText = 'display: flex; justify-content: space-between; align-items: center; color: #374151; margin: 0.5rem 0; padding: 0.5rem; background-color: #f3f4f6; border-radius: 0.375rem;';
                        
                        const friendName = document.createElement('span');
                        friendName.textContent = friend.name;

                        const buttonContainer = document.createElement('div');
                        buttonContainer.style.cssText = 'display: flex; align-items: center; gap: 0.5rem;';

                        const actionButton = document.createElement('button');
                        actionButton.textContent = currentAction === 'trade' ? 'Trade' : 'Steal Blooks';
                        actionButton.className = 'bg-yellow-400';
                        actionButton.style.cssText = 'background-color: #fbbf24; color: white; font-weight: bold; padding: 0.25rem 0.75rem; border-radius: 0.375rem; border: none; cursor: not-allowed; opacity: 0.5;';
                        actionButton.disabled = true; // Make the button inactive
                        
                        const removeButton = document.createElement('button');
                        removeButton.textContent = 'Remove';
                        removeButton.style.cssText = 'color: #ef4444; font-weight: bold; background: none; border: none; cursor: not-allowed; margin-left: 1rem; opacity: 0.5;';
                        removeButton.disabled = true; // Make the button inactive

                        buttonContainer.appendChild(actionButton);
                        buttonContainer.appendChild(removeButton);
                        listItem.appendChild(friendName);
                        listItem.appendChild(buttonContainer);
                        friendList.appendChild(listItem);
                    });
                    dynamicFriendsContent.appendChild(friendList);
                    dynamicFriendsContent.innerHTML += `<p style="color: #ef4444; font-weight: bold; margin-top: 1rem;">BUG CR-2T45 Error</p>`;
                }
            }

            // Initialize with an empty friends list
            renderFriendsList(currentFriends);
            
            // Immediately disable the addFriendsButton
            addFriendsButton.disabled = true;
            addFriendsButton.style.opacity = '0.5';
            addFriendsButton.style.cursor = 'not-allowed';

            // Override the click event for the trade button to make it show the error
            tradeButton.addEventListener('click', () => {
                tradingUI.classList.remove('hidden');
                // The friends list is already rendered with the error message and inactive buttons
            });

        }

        // Initialize the app
        setupUI();
        
        console.log('Trade Button app loaded! Click the Trade button on the right side of the screen.');
        
    }, 100);

    // Return a function to remove the app
    return function cleanup() {
        if (appContainer && appContainer.parentNode) {
            appContainer.parentNode.removeChild(appContainer);
        }
    };
})();
    // 
    //Blooket Client UI - Enhanced Interactive Interface
(function() {
    'use strict';

    // --- NEW: Check and remove existing UI and toggle button if they exist ---
    if (document.getElementById('blooket-client-ui')) {
        document.getElementById('blooket-client-ui').remove();
    }
    if (document.getElementById('toggle-ui-btn')) {
        document.getElementById('toggle-ui-btn').remove();
    }

    // --- NEW: Create and add the toggle button first, and set it to be closed initially ---
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'toggle-ui-btn';
    toggleBtn.className = 'toggle-ui-btn closed';
    toggleBtn.title = 'Toggle UI';
    toggleBtn.innerHTML = '<span class="arrow-icon">▼</span>'; // Arrow pointing down when closed
    document.body.appendChild(toggleBtn);

    // Create main container for the UI
    const clientUI = document.createElement('div');
    clientUI.id = 'blooket-client-ui';
    clientUI.className = 'ui-hidden'; // Start with the UI hidden
    clientUI.innerHTML = `
        <div id="client-window">
            <div id="client-header">
                <div id="client-title">
                    <span>🎮 Client Pro</span>
                </div>
                <div id="client-controls">
                    <button id="fullscreen-btn" title="Fullscreen">⛶</button>
                    <button id="minimize-btn" title="Minimize">−</button>
                    <button id="close-btn" title="Close">×</button>
                </div>
            </div>
    
            <div id="client-body">
                <div id="sidebar" class="sidebar-open">
                    <div id="sidebar-header">
                        <button id="sidebar-toggle">☰</button>
                        <button id="sidebar-lock" title="Lock Sidebar">🔓</button>
                    </div>
                    <div id="sidebar-tabs">
                        <button class="sidebar-tab active" data-tab="main">
                            <span class="tab-icon">🏠</span>
                            <span class="tab-label">Main</span>
                        </button>
                        <button class="sidebar-tab" data-tab="controls">
                            <span class="tab-icon">🎮</span>
                            <span class="tab-label">Controls</span>
                        </button>
                        <button class="sidebar-tab" data-tab="automation">
                            <span class="tab-icon">🤖</span>
                            <span class="tab-label">Automation</span>
                        </button>
                        <button class="sidebar-tab" data-tab="cheats">
                            <span class="tab-icon">⚡</span>
                            <span class="tab-label">Cheats</span>
                        </button>
                        <button class="sidebar-tab" data-tab="servers">
                            <span class="tab-icon">🌐</span>
                            <span class="tab-label">Servers</span>
                        </button>
                        <button class="sidebar-tab" data-tab="data">
                            <span class="tab-icon">📊</span>
                            <span class="tab-label">Data</span>
                        </button>
                        <button class="sidebar-tab" data-tab="firmware">
                            <span class="tab-icon">💾</span>
                            <span class="tab-label">Firmware</span>
                        </button>
                        <button class="sidebar-tab" data-tab="database">
                            <span class="tab-icon">🗄️</span>
                            <span class="tab-label">Database</span>
                        </button>
                        <button class="sidebar-tab" data-tab="client">
                            <span class="tab-icon">💻</span>
                            <span class="tab-label">Client</span>
                        </button>
                        <button class="sidebar-tab" data-tab="farm">
                            <span class="tab-icon">🌾</span>
                            <span class="tab-label">Farm</span>
                        </button>
                        <button class="sidebar-tab" data-tab="license">
                            <span class="tab-icon">📜</span>
                            <span class="tab-label">License</span>
                        </button>
                        <button class="sidebar-tab" data-tab="tools">
                            <span class="tab-icon">🔧</span>
                            <span class="tab-label">Tools</span>
                        </button>
                        <button class="sidebar-tab" data-tab="admin">
                            <span class="tab-icon">👑</span>
                            <span class="tab-label">Admin Commands</span>
                        </button>
                        <button class="sidebar-tab" data-tab="callbacks">
                            <span class="tab-icon">📞</span>
                            <span class="tab-label">Call Backs</span>
                        </button>
                        <button class="sidebar-tab" data-tab="logs">
                            <span class="tab-icon">📋</span>
                            <span class="tab-label">Logs</span>
                        </button>
                        <button class="sidebar-tab" data-tab="errors">
                            <span class="tab-icon">❌</span>
                            <span class="tab-label">Errors</span>
                        </button>
                        <button class="sidebar-tab" data-tab="system">
                            <span class="tab-icon">🖥️</span>
                            <span class="tab-label">System</span>
                        </button>
                    </div>
                </div>
        
                <div id="client-content">
                    <div id="main-tab" class="tab-content active">
                        <h2>Main Dashboard</h2>
                        <div class="dashboard-grid">
                            <div class="feature-card large">
                                <h3>Game Statistics</h3>
                                <div class="stats-grid">
                                    <div class="stat-item">
                                        <span class="stat-label">Current Score</span>
                                        <span class="stat-value" id="current-score">0</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Questions</span>
                                        <span class="stat-value" id="question-count">0</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Accuracy</span>
                                        <span class="stat-value" id="accuracy">100%</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Time Played</span>
                                        <span class="stat-value" id="time-played">0:00</span>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="feature-card">
                                <h3>Quick Actions</h3>
                                <div class="action-grid">
                                    <button class="action-btn primary">Auto Answer</button>
                                    <button class="action-btn secondary">Skip Question</button>
                                    <button class="action-btn success">Get Powerups</button>
                                    <button class="action-btn danger">Reset Game</button>
                                </div>
                            </div>
                    
                            <div class="feature-card">
                                <h3>Game Status</h3>
                                <div class="status-indicators">
                                    <div class="status-item">
                                        <span class="status-dot active"></span>
                                        <span>Bot Status: Active</span>
                                    </div>
                                    <div class="status-item">
                                        <span class="status-dot inactive"></span>
                                        <span>Auto Mode: Disabled</span>
                                    </div>
                                    <div class="status-item">
                                        <span class="status-dot warning"></span>
                                        <span>Detection Risk: Low</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="controls-tab" class="tab-content">
                        <h2>Game Controls</h2>
                        <div class="controls-grid">
                            <div class="control-panel">
                                <h3>Basic Controls</h3>
                                <div class="control-group">
                                    <label class="control-label">
                                        <input type="checkbox" id="auto-play"> 
                                        <span class="checkmark"></span>
                                        Auto Play Mode
                                    </label>
                                    <label class="control-label">
                                        <input type="checkbox" id="fast-mode"> 
                                        <span class="checkmark"></span>
                                        Fast Mode
                                    </label>
                                    <label class="control-label">
                                        <input type="checkbox" id="god-mode"> 
                                        <span class="checkmark"></span>
                                        God Mode
                                    </label>
                                </div>
                    
                                <div class="slider-group">
                                    <label>Speed Control</label>
                                    <input type="range" id="speed-slider" min="1" max="10" value="5">
                                    <span class="slider-value" id="speed-value">5</span>
                                </div>
                    
                                <div class="slider-group">
                                    <label>Answer Delay (ms)</label>
                                    <input type="range" id="delay-slider" min="0" max="5000" value="1000" step="100">
                                    <span class="slider-value" id="delay-value">1000ms</span>
                                </div>
                            </div>
                    
                            <div class="control-panel">
                                <h3>Advanced Controls</h3>
                                <div class="button-grid">
                                    <button class="control-btn start">Start Bot</button>
                                    <button class="control-btn stop">Stop Bot</button>
                                    <button class="control-btn pause">Pause Game</button>
                                    <button class="control-btn resume">Resume Game</button>
                                    <button class="control-btn restart">Restart Round</button>
                                    <button class="control-btn emergency">Emergency Stop</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="automation-tab" class="tab-content">
                        <h2>Automation Suite</h2>
                        <div class="automation-panels">
                            <div class="auto-panel">
                                <h3>Question Automation</h3>
                                <div class="auto-options">
                                    <button class="auto-btn">Auto Correct Answers</button>
                                    <button class="auto-btn">Smart Guessing</button>
                                    <button class="auto-btn">Pattern Recognition</button>
                                </div>
                            </div>
                    
                            <div class="auto-panel">
                                <h3>Game Automation</h3>
                                <div class="auto-options">
                                    <button class="auto-btn">Auto Join Games</button>
                                    <button class="auto-btn">Auto Rejoin</button>
                                    <button class="auto-btn">Farm Mode</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="servers-tab" class="tab-content">
                        <h2>Server Management</h2>
                        <div class="server-panels">
                            <div class="server-panel">
                                <h3>Server Status</h3>
                                <div class="server-list">
                                    <div class="server-item">
                                        <span class="server-dot online"></span>
                                        <span class="server-name">US-East-1</span>
                                        <span class="server-ping">23ms</span>
                                    </div>
                                    <div class="server-item">
                                        <span class="server-dot online"></span>
                                        <span class="server-name">EU-West-1</span>
                                        <span class="server-ping">45ms</span>
                                    </div>
                                    <div class="server-item">
                                        <span class="server-dot offline"></span>
                                        <span class="server-name">Asia-Pacific</span>
                                        <span class="server-ping">--ms</span>
                                    </div>
                                </div>
                                <button class="server-btn">Refresh Servers</button>
                            </div>
                    
                            <div class="server-panel">
                                <h3>Connection Settings</h3>
                                <div class="connection-settings">
                                    <label class="control-label">
                                        <input type="checkbox" id="auto-connect" checked>
                                        <span class="checkmark"></span>
                                        Auto Connect
                                    </label>
                                    <label class="control-label">
                                        <input type="checkbox" id="proxy-enabled">
                                        <span class="checkmark"></span>
                                        Use Proxy
                                    </label>
                                    <div class="input-group">
                                        <label>Custom Server URL:</label>
                                        <input type="text" placeholder="wss://custom-server.com" class="server-input">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="data-tab" class="tab-content">
                        <h2>Data Analytics</h2>
                        <div class="data-dashboard">
                            <div class="data-card">
                                <h3>Game Statistics</h3>
                                <div class="data-metrics">
                                    <div class="metric">
                                        <span class="metric-label">Total Games</span>
                                        <span class="metric-value" id="total-games">1,247</span>
                                    </div>
                                    <div class="metric">
                                        <span class="metric-label">Win Rate</span>
                                        <span class="metric-value" id="win-rate">87.3%</span>
                                    </div>
                                    <div class="metric">
                                        <span class="metric-label">Avg Score</span>
                                        <span class="metric-value" id="avg-score">8,542</span>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="data-card">
                                <h3>Performance Data</h3>
                                <div class="performance-chart">
                                    <div class="chart-placeholder">📈 Performance Chart</div>
                                    <button class="data-btn">Export Data</button>
                                    <button class="data-btn">Clear History</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="firmware-tab" class="tab-content">
                        <h2>Firmware Management</h2>
                        <div class="firmware-sections">
                            <div class="firmware-panel">
                                <h3>Current Version</h3>
                                <div class="version-info">
                                    <div class="version-display">v2.1.7-stable</div>
                                    <div class="version-date">Released: 2024-07-20</div>
                                    <div class="version-status">Status: Up to date</div>
                                </div>
                            </div>
                    
                            <div class="firmware-panel">
                                <h3>Update Management</h3>
                                <div class="update-controls">
                                    <button class="firmware-btn primary">Check Updates</button>
                                    <button class="firmware-btn secondary">Download Beta</button>
                                    <button class="firmware-btn danger">Factory Reset</button>
                                    <div class="update-progress">
                                        <div class="progress-bar">
                                            <div class="progress-fill" style="width: 0%"></div>
                                        </div>
                                        <div class="progress-text">Ready for updates</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="database-tab" class="tab-content">
                        <h2>Database Management</h2>
                        <div class="database-grid">
                            <div class="db-panel">
                                <h3>Database Status</h3>
                                <div class="db-stats">
                                    <div class="db-stat">
                                        <span class="stat-label">Records</span>
                                        <span class="stat-value">45,892</span>
                                    </div>
                                    <div class="db-stat">
                                        <span class="stat-label">Size</span>
                                        <span class="stat-value">127MB</span>
                                    </div>
                                    <div class="db-stat">
                                        <span class="stat-label">Last Sync</span>
                                        <span class="stat-value">2 min ago</span>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="db-panel">
                                <h3>Operations</h3>
                                <div class="db-operations">
                                    <button class="db-btn">Backup Database</button>
                                    <button class="db-btn">Restore Backup</button>
                                    <button class="db-btn">Optimize Tables</button>
                                    <button class="db-btn">Clear Cache</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="client-tab" class="tab-content">
                        <h2>Client Configuration</h2>
                        <div class="client-config">
                            <div class="config-section">
                                <h3>Client Information</h3>
                                <div class="client-info">
                                    <div class="info-row">
                                        <span class="info-label">Client ID:</span>
                                        <span class="info-value">CL-7F4A-92B8-E156</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-label">Session:</span>
                                        <span class="info-value">Active (2h 15m)</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-label">IP Address:</span>
                                        <span class="info-value">192.168.1.142</span>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="config-section">
                                <h3>Client Settings</h3>
                                <div class="client-settings">
                                    <label class="control-label">
                                        <input type="checkbox" id="stealth-mode" checked>
                                        <span class="checkmark"></span>
                                        Stealth Mode
                                    </label>
                                    <label class="control-label">
                                        <input type="checkbox" id="debug-mode">
                                        <span class="checkmark"></span>
                                        Debug Mode
                                    </label>
                                    <button class="client-btn">Regenerate ID</button>
                                    <button class="client-btn">Reset Session</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="farm-tab" class="tab-content">
                        <h2>Farming Operations</h2>
                        <div class="farm-dashboard">
                            <div class="farm-stats">
                                <h3>Farm Statistics</h3>
                                <div class="farm-metrics">
                                    <div class="farm-metric">
                                        <span class="metric-icon">🌱</span>
                                        <span class="metric-label">Active Farms</span>
                                        <span class="metric-value">7</span>
                                    </div>
                                    <div class="farm-metric">
                                        <span class="metric-icon">💰</span>
                                        <span class="metric-label">Total Earned</span>
                                        <span class="metric-value">28,945</span>
                                    </div>
                                    <div class="farm-metric">
                                        <span class="metric-icon">⏱️</span>
                                        <span class="metric-label">Uptime</span>
                                        <span class="metric-value">14h 32m</span>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="farm-controls">
                                <h3>Farm Controls</h3>
                                <div class="farm-buttons">
                                    <button class="farm-btn start">Start All Farms</button>
                                    <button class="farm-btn stop">Stop All Farms</button>
                                    <button class="farm-btn pause">Pause Farming</button>
                                    <button class="farm-btn config">Configure Farms</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="license-tab" class="tab-content">
                        <h2>License Management</h2>
                        <div class="license-info">
                            <div class="license-card">
                                <h3>Current License</h3>
                                <div class="license-details">
                                    <div class="license-type">Premium Pro License</div>
                                    <div class="license-key">PRO-2024-7F4A-92B8-E156-XYZQ</div>
                                    <div class="license-expiry">Expires: December 31, 2024</div>
                                    <div class="license-status active">Status: Active</div>
                                </div>
                            </div>
                    
                            <div class="license-actions">
                                <h3>License Actions</h3>
                                <div class="license-buttons">
                                    <button class="license-btn">Validate License</button>
                                    <button class="license-btn">Renew License</button>
                                    <button class="license-btn">Transfer License</button>
                                    <button class="license-btn">View History</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="tools-tab" class="tab-content">
                        <h2>Development Tools</h2>
                        <div class="tools-grid">
                            <div class="tool-category">
                                <h3>Debug Tools</h3>
                                <div class="tool-buttons">
                                    <button class="tool-btn">Network Monitor</button>
                                    <button class="tool-btn">Memory Profiler</button>
                                    <button class="tool-btn">Performance Analyzer</button>
                                    <button class="tool-btn">Console Logger</button>
                                </div>
                            </div>
                    
                            <div class="tool-category">
                                <h3>Utility Tools</h3>
                                <div class="tool-buttons">
                                    <button class="tool-btn">Script Editor</button>
                                    <button class="tool-btn">Packet Sniffer</button>
                                    <button class="tool-btn">Hash Generator</button>
                                    <button class="tool-btn">JSON Formatter</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="admin-tab" class="tab-content">
                        <h2>Admin Commands</h2>
                        <div class="admin-interface">
                            <div class="command-terminal">
                                <h3>Command Terminal</h3>
                                <div class="terminal-output" id="terminal-output">
                                    <div class="terminal-line">$ Welcome to Admin Terminal</div>
                                    <div class="terminal-line">$ Type 'help' for available commands</div>
                                </div>
                                <div class="terminal-input">
                                    <span class="terminal-prompt">admin@client:~$ </span>
                                    <input type="text" id="admin-command" class="command-input" placeholder="Enter command...">
                                </div>
                            </div>
                    
                            <div class="quick-commands">
                                <h3>Quick Commands</h3>
                                <div class="command-buttons">
                                    <button class="cmd-btn" data-cmd="status">System Status</button>
                                    <button class="cmd-btn" data-cmd="restart">Restart Services</button>
                                    <button class="cmd-btn" data-cmd="backup">Create Backup</button>
                                    <button class="cmd-btn" data-cmd="clear">Clear Logs</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="callbacks-tab" class="tab-content">
                        <h2>Callback Management</h2>
                        <div class="callback-dashboard">
                            <div class="callback-stats">
                                <h3>Callback Statistics</h3>
                                <div class="callback-metrics">
                                    <div class="callback-metric">
                                        <span class="metric-label">Active Callbacks</span>
                                        <span class="metric-value">12</span>
                                    </div>
                                    <div class="callback-metric">
                                        <span class="metric-label">Success Rate</span>
                                        <span class="metric-value">94.7%</span>
                                    </div>
                                    <div class="callback-metric">
                                        <span class="metric-label">Avg Response</span>
                                        <span class="metric-value">147ms</span>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="callback-list">
                                <h3>Recent Callbacks</h3>
                                <div class="callback-items">
                                    <div class="callback-item">
                                        <span class="callback-status success"></span>
                                        <span class="callback-url">https://api.example.com/webhook</span>
                                        <span class="callback-time">2 min ago</span>
                                    </div>
                                    <div class="callback-item">
                                        <span class="callback-status success"></span>
                                        <span class="callback-url">https://hooks.slack.com/services/...</span>
                                        <span class="callback-time">5 min ago</span>
                                    </div>
                                    <div class="callback-item">
                                        <span class="callback-status failed"></span>
                                        <span class="callback-url">https://discord.com/api/webhooks/...</span>
                                        <span class="callback-time">12 min ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="logs-tab" class="tab-content">
                        <h2>System Logs</h2>
                        <div class="logs-interface">
                            <div class="log-controls">
                                <select class="log-filter">
                                    <option value="all">All Logs</option>
                                    <option value="info">Info</option>
                                    <option value="warning">Warning</option>
                                    <option value="error">Error</option>
                                </select>
                                <button class="log-btn">Refresh</button>
                                <button class="log-btn">Clear</button>
                                <button class="log-btn">Export</button>
                            </div>
                    
                            <div class="log-viewer" id="log-viewer">
                                <div class="log-entry info">
                                    <span class="log-time">15:42:18</span>
                                    <span class="log-level info">INFO</span>
                                    <span class="log-message">Client connected successfully</span>
                                </div>
                                <div class="log-entry warning">
                                    <span class="log-time">15:41:55</span>
                                    <span class="log-level warning">WARN</span>
                                    <span class="log-message">High memory usage detected (78%)</span>
                                </div>
                                <div class="log-entry info">
                                    <span class="log-time">15:41:32</span>
                                    <span class="log-level info">INFO</span>
                                    <span class="log-message">Automation script started</span>
                                </div>
                                <div class="log-entry error">
                                    <span class="log-time">15:40:12</span>
                                    <span class="log-level error">ERROR</span>
                                    <span class="log-message">Failed to connect to server (timeout)</span>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="errors-tab" class="tab-content">
                        <h2>Error Management</h2>
                        <div class="error-dashboard">
                            <div class="error-summary">
                                <h3>Error Summary</h3>
                                <div class="error-stats">
                                    <div class="error-stat critical">
                                        <span class="error-count">3</span>
                                        <span class="error-label">Critical</span>
                                    </div>
                                    <div class="error-stat high">
                                        <span class="error-count">7</span>
                                        <span class="error-label">High</span>
                                    </div>
                                    <div class="error-stat medium">
                                        <span class="error-count">12</span>
                                        <span class="error-label">Medium</span>
                                    </div>
                                    <div class="error-stat low">
                                        <span class="error-count">25</span>
                                        <span class="error-label">Low</span>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="error-list">
                                <h3>Recent Errors</h3>
                                <div class="error-items">
                                    <div class="error-item critical">
                                        <span class="error-severity">CRITICAL</span>
                                        <span class="error-desc">Database connection lost</span>
                                        <span class="error-time">3 min ago</span>
                                    </div>
                                    <div class="error-item high">
                                        <span class="error-severity">HIGH</span>
                                        <span class="error-desc">Memory leak detected in module</span>
                                        <span class="error-time">8 min ago</span>
                                    </div>
                                    <div class="error-item medium">
                                        <span class="error-severity">MEDIUM</span>
                                        <span class="error-desc">API rate limit exceeded</span>
                                        <span class="error-time">15 min ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div id="cheats-tab" class="tab-content">
                        <h2>Cheat Engine</h2>
                        <div class="cheats-warning">
                            ⚠️ Use these features responsibly
                        </div>
                        <div class="cheats-grid">
                            <div class="cheat-category">
                                <h3>Score Cheats</h3>
                                <button class="cheat-btn">Max Score</button>
                                <button class="cheat-btn">Add 1000 Points</button>
                                <button class="cheat-btn">Infinite Coins</button>
                            </div>
                    
                            <div class="cheat-category">
                                <h3>Game Cheats</h3>
                                <button class="cheat-btn">Skip to End</button>
                                <button class="cheat-btn">Reveal Answers</button>
                                <button class="cheat-btn">Time Freeze</button>
                            </div>
                        </div>
                    </div>
                    
                    <div id="system-tab" class="tab-content active">
                        <h2>System Information</h2>
                        <div class="system-grid">
                            <div class="system-panel">
                                <h3>System Resources</h3>
                                <div class="resource-monitors">
                                    <div class="resource-item">
                                        <span class="resource-label">CPU Usage</span>
                                        <div class="resource-bar">
                                            <div class="resource-fill" style="width: 34%"></div>
                                        </div>
                                        <span class="resource-value">34%</span>
                                    </div>
                                    <div class="resource-item">
                                        <span class="resource-label">Memory</span>
                                        <div class="resource-bar">
                                            <div class="resource-fill" style="width: 67%"></div>
                                        </div>
                                        <span class="resource-value">67%</span>
                                    </div>
                                    <div class="resource-item">
                                        <span class="resource-label">Disk I/O</span>
                                        <div class="resource-bar">
                                            <div class="resource-fill" style="width: 23%"></div>
                                        </div>
                                        <span class="resource-value">23%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="system-panel">
                                <h3>System Details</h3>
                                <div class="system-info">
                                    <div class="info-row">
                                        <span class="info-label">OS:</span>
                                        <span class="info-value">Windows 11 Pro</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-label">Browser:</span>
                                        <span class="info-value">Chrome 115.0.5790</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-label">RAM:</span>
                                        <span class="info-value">16GB DDR4</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-label">Uptime:</span>
                                        <span class="info-value">2d 14h 32m</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add enhanced CSS styles
    const styles = `
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #1a1a1a;
            color: #ccc;
        }
        
        /* NEW: Styles for the toggle button */
        #toggle-ui-btn {
            position: fixed;
            top: 0;
            left: 50%; /* Center the button horizontally */
            transform: translateX(-50%);
            z-index: 1000000;
            background: linear-gradient(90deg, #8b5cf6, #a855f7);
            color: white;
            border: 2px solid #8b5cf6;
            padding: 8px 12px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        #toggle-ui-btn:hover {
            background: linear-gradient(90deg, #a855f7, #c464fa);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
        }
        
        .arrow-icon {
            display: inline-block;
            transition: transform 0.3s ease;
        }
        
        #toggle-ui-btn.closed .arrow-icon {
            transform: rotate(180deg);
        }

        #blooket-client-ui {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 800px;
            height: 600px;
            z-index: 999999;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            user-select: none;
            /* NEW: Add transition and initial state */
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        /* NEW: Class to hide the UI */
        #blooket-client-ui.ui-hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-100px);
        }
        
        #blooket-client-ui.fullscreen {
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            position: fixed !important;
            z-index: 999999 !important;
        }

        #blooket-client-ui.fullscreen #client-window {
            width: 100% !important;
            height: 100% !important;
            border-radius: 0 !important;
        }
        
        #client-window {
            width: 100%;
            height: 100%;
            background: linear-gradient(145deg, #1a1a1a 0%, #2d1b4e 50%, #1a1a1a 100%);
            border: 2px solid #8b5cf6;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(139, 92, 246, 0.4);
            overflow: hidden;
            backdrop-filter: blur(15px);
            display: flex;
            flex-direction: column;
        }
        
        #client-header {
            background: linear-gradient(90deg, #8b5cf6, #a855f7);
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: move;
            flex-shrink: 0;
        }
        
        #client-title {
            color: white;
            font-weight: bold;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        #client-controls {
            display: flex;
            gap: 8px;
        }
        
        #client-controls button {
            width: 28px;
            height: 28px;
            border: none;
            border-radius: 6px;
            color: white;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            font-weight: bold;
        }
        
        #minimize-btn {
            background: linear-gradient(145deg, #fbbf24, #f59e0b);
        }
        
        #minimize-btn:hover {
            background: linear-gradient(145deg, #f59e0b, #d97706);
            transform: scale(1.1);
        }
        
        #fullscreen-btn {
            background: linear-gradient(145deg, #10b981, #059669);
        }
        
        #fullscreen-btn:hover {
            background: linear-gradient(145deg, #059669, #047857);
            transform: scale(1.1);
        }
        
        #close-btn {
            background: linear-gradient(145deg, #ef4444, #dc2626);
        }
        
        #close-btn:hover {
            background: linear-gradient(145deg, #dc2626, #b91c1c);
            transform: scale(1.1);
        }
        
        #client-body {
            display: flex;
            flex: 1;
            overflow: hidden;
        }
        
        #sidebar {
            width: 250px;
            background: linear-gradient(180deg, #2a2a2a 0%, #3d2a5a 100%);
            border-right: 2px solid #8b5cf6;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
        }
        
        #sidebar.sidebar-closed {
            width: 60px;
        }
        
        #sidebar.sidebar-locked {
            border-right-color: #10b981;
        }
        
        #sidebar-header {
            padding: 15px;
            border-bottom: 1px solid rgba(139, 92, 246, 0.3);
            display: flex;
            gap: 10px;
            flex-shrink: 0;
        }
        
        #sidebar-toggle, #sidebar-lock {
            background: rgba(139, 92, 246, 0.2);
            border: 1px solid #8b5cf6;
            color: #8b5cf6;
            padding: 8px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 14px;
        }
        
        #sidebar-toggle:hover, #sidebar-lock:hover {
            background: rgba(139, 92, 246, 0.3);
            transform: scale(1.05);
        }
        
        #sidebar-tabs {
            flex: 1;
            padding: 10px 0;
            overflow-y: auto;
        }
        
        .sidebar-tab {
            width: 100%;
            padding: 15px 20px;
            background: transparent;
            border: none;
            color: #ccc;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 12px;
            text-align: left;
            font-size: 14px;
            border-left: 3px solid transparent;
        }
        
        .sidebar-tab:hover {
            background: rgba(139, 92, 246, 0.2);
            color: white;
            border-left-color: rgba(139, 92, 246, 0.5);
        }
        
        .sidebar-tab.active {
            background: rgba(139, 92, 246, 0.3);
            color: #8b5cf6;
            border-left-color: #8b5cf6;
        }
        
        .tab-icon {
            font-size: 16px;
            flex-shrink: 0;
        }
        
        .tab-label {
            transition: opacity 0.3s;
        }
        
        #sidebar.sidebar-closed .tab-label {
            opacity: 0;
            width: 0;
            overflow: hidden;
        }
        
        #client-content {
            flex: 1;
            padding: 25px;
            background: linear-gradient(180deg, #1a1a1a 0%, #2a1a3a 100%);
            overflow-y: auto;
            color: white;
        }
        
        .tab-content {
            display: none;
            height: 100%;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .tab-content h2 {
            color: #8b5cf6;
            margin-top: 0;
            margin-bottom: 25px;
            font-size: 24px;
            font-weight: 600;
        }
        
        .dashboard-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 20px;
            height: calc(100% - 60px);
        }
        
        .feature-card {
            background: linear-gradient(145deg, #2a2a2a, #3a2a4a);
            border: 1px solid #8b5cf6;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        
        .feature-card.large {
            grid-row: 1 / 3;
        }
        
        .feature-card h3 {
            color: #a855f7;
            margin: 0 0 15px 0;
            font-size: 18px;
            font-weight: 600;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .stat-item {
            background: rgba(139, 92, 246, 0.1);
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }
        
        .stat-label {
            display: block;
            color: #ccc;
            font-size: 12px;
            margin-bottom: 5px;
        }
        
        .stat-value {
            display: block;
            color: #8b5cf6;
            font-size: 24px;
            font-weight: bold;
        }
        
        .action-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        
        .action-btn {
            padding: 12px 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .action-btn.primary {
            background: linear-gradient(145deg, #8b5cf6, #a855f7);
            color: white;
        }
        
        .action-btn.secondary {
            background: linear-gradient(145deg, #6b7280, #4b5563);
            color: white;
        }
        
        .action-btn.success {
            background: linear-gradient(145deg, #10b981, #059669);
            color: white;
        }
        
        .action-btn.danger {
            background: linear-gradient(145deg, #ef4444, #dc2626);
            color: white;
        }
        
        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        .status-indicators {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .status-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            color: #ccc;
        }
        
        .status-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            flex-shrink: 0;
        }
        
        .status-dot.active {
            background: #10b981;
            box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
        }
        
        .status-dot.inactive {
            background: #6b7280;
        }
        
        .status-dot.warning {
            background: #f59e0b;
            box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);
        }
        
        .controls-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            height: calc(100% - 60px);
        }
        
        .control-panel {
            background: rgba(42, 42, 42, 0.5);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-radius: 12px;
            padding: 20px;
        }
        
        .control-panel h3 {
            color: #a855f7;
            margin-top: 0;
            margin-bottom: 20px;
            font-size: 18px;
        }
        
        .control-group {
            margin-bottom: 25px;
        }
        
        .control-label {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            color: #ccc;
            font-size: 14px;
            cursor: pointer;
            position: relative;
        }
        
        .control-label input[type="checkbox"] {
            opacity: 0;
            position: absolute;
        }
        
        .checkmark {
            width: 20px;
            height: 20px;
            background: #2a2a2a;
            border: 2px solid #8b5cf6;
            border-radius: 4px;
            margin-right: 12px;
            position: relative;
            transition: all 0.2s;
        }
        
        .control-label input[type="checkbox"]:checked + .checkmark {
            background: #8b5cf6;
        }
        
        .control-label input[type="checkbox"]:checked + .checkmark::after {
            content: '✓';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 14px;
            font-weight: bold;
        }
        
        .slider-group {
            margin-bottom: 20px;
        }
        
        .slider-group label {
            display: block;
            color: #ccc;
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .slider-group input[type="range"] {
            width: 100%;
            height: 6px;
            background: #2a2a2a;
            border-radius: 3px;
            outline: none;
            -webkit-appearance: none;
        }
        
        .slider-group input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            background: #8b5cf6;
            border-radius: 50%;
            cursor: pointer;
        }
        
        .slider-value {
            color: #8b5cf6;
            font-weight: bold;
            float: right;
        }
        
        .button-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        
        .control-btn {
            padding: 12px 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .control-btn.start {
            background: linear-gradient(145deg, #10b981, #059669);
            color: white;
        }
        
        .control-btn.stop {
            background: linear-gradient(145deg, #ef4444, #dc2626);
            color: white;
        }
        
        .control-btn.pause {
            background: linear-gradient(145deg, #f59e0b, #d97706);
            color: white;
        }
        
        .control-btn.resume {
            background: linear-gradient(145deg, #3b82f6, #2563eb);
            color: white;
        }
        
        .control-btn.restart {
            background: linear-gradient(145deg, #8b5cf6, #a855f7);
            color: white;
        }
        
        .control-btn.emergency {
            background: linear-gradient(145deg, #7c2d12, #991b1b);
            color: white;
        }
        
        .automation-panels, .cheats-grid {
            display: grid;
            gap: 25px;
        }
        
        .auto-panel, .cheat-category {
            background: rgba(42, 42, 42, 0.5);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-radius: 12px;
            padding: 20px;
        }
        
        .auto-panel h3, .cheat-category h3 {
            color: #a855f7;
            margin-top: 0;
            margin-bottom: 15px;
        }
        
        .auto-options, .auto-btn, .cheat-btn {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .auto-btn, .cheat-btn {
            background: linear-gradient(145deg, #8b5cf6, #a855f7);
            color: white;
            border: none;
            padding: 12px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s;
        }
        
        .auto-btn:hover, .cheat-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(139, 92, 246, 0.4);
        }
        
        .cheats-warning {
            background: rgba(245, 158, 11, 0.2);
            border: 1px solid #f59e0b;
            color: #fbbf24;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: 600;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .info-item {
            background: rgba(139, 92, 246, 0.1);
            padding: 12px;
            border-radius: 8px;
            color: #ccc;
        }
        
        .features-list ul {
            list-style: none;
            padding: 0;
        }
        
        .server-panels, .data-dashboard, .firmware-sections, .database-grid, 
        .client-config, .farm-dashboard, .license-info, .tools-grid, 
        .admin-interface, .callback-dashboard, .logs-interface, 
        .error-dashboard, .system-grid {
            display: grid;
            gap: 20px;
            height: calc(100% - 60px);
        }
        
        .server-panels {
            grid-template-columns: 1fr 1fr;
        }
        
        .server-panel, .data-card, .firmware-panel, .db-panel, 
        .config-section, .farm-stats, .farm-controls, .license-card, 
        .license-actions, .tool-category, .command-terminal, 
        .quick-commands, .callback-stats, .callback-list, 
        .log-controls, .error-summary, .error-list, .system-panel {
            background: rgba(42, 42, 42, 0.5);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-radius: 12px;
            padding: 20px;
        }
        
        .server-list, .server-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .server-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 10px;
        }
        
        .server-dot.online {
            background: #10b981;
            box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
        }
        
        .server-dot.offline {
            background: #ef4444;
        }
        
        .server-name {
            flex: 1;
            color: #ccc;
        }
        
        .server-ping {
            color: #8b5cf6;
            font-weight: bold;
        }
        
        .server-btn, .data-btn, .firmware-btn, .db-btn, .client-btn, 
        .farm-btn, .license-btn, .tool-btn, .cmd-btn, .log-btn {
            background: linear-gradient(145deg, #8b5cf6, #a855f7);
            color: white;
            border: none;
            padding: 10px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s;
            margin: 5px;
        }
        
        .server-btn:hover, .data-btn:hover, .firmware-btn:hover, 
        .db-btn:hover, .client-btn:hover, .farm-btn:hover, 
        .license-btn:hover, .tool-btn:hover, .cmd-btn:hover, .log-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(139, 92, 246, 0.4);
        }
        
        .connection-settings, .data-metrics, .db-stats, .client-info, 
        .client-settings, .farm-metrics, .license-details {
            margin-top: 15px;
        }
        
        .server-input, .command-input {
            width: 100%;
            background: rgba(42, 42, 42, 0.8);
            border: 1px solid #8b5cf6;
            color: white;
            padding: 10px;
            border-radius: 6px;
            margin-top: 8px;
        }
        
        .server-input::placeholder, .command-input::placeholder {
            color: #666;
        }
        
        .input-group {
            margin-top: 15px;
        }
        
        .input-group label {
            display: block;
            color: #ccc;
            margin-bottom: 5px;
            font-size: 14px;
        }
        
        .data-metrics, .farm-metrics, .callback-metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
        }
        
        .metric, .farm-metric, .callback-metric {
            text-align: center;
            background: rgba(139, 92, 246, 0.1);
            padding: 15px;
            border-radius: 8px;
        }
        
        .metric-label, .metric-value {
            display: block;
            color: #ccc;
        }
        
        .metric-value {
            color: #8b5cf6;
            font-size: 20px;
            font-weight: bold;
            margin-top: 5px;
        }
        
        .metric-icon {
            font-size: 24px;
            display: block;
            margin-bottom: 8px;
        }
        
        .chart-placeholder {
            background: rgba(139, 92, 246, 0.1);
            border: 2px dashed #8b5cf6;
            padding: 40px;
            text-align: center;
            color: #8b5cf6;
            font-size: 18px;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        
        .version-display {
            background: rgba(139, 92, 246, 0.2);
            color: #8b5cf6;
            padding: 15px;
            border-radius: 8px;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 10px;
        }
        
        .version-date, .version-status {
            color: #ccc;
            margin: 5px 0;
        }
        
        .update-progress {
            margin-top: 20px;
        }
        
        .progress-bar {
            background: rgba(42, 42, 42, 0.8);
            height: 20px;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 10px;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #8b5cf6, #a855f7);
            transition: width 0.3s ease;
        }
        
        .progress-text {
            color: #ccc;
            text-align: center;
            font-size: 14px;
        }
        
        .firmware-btn.primary {
            background: linear-gradient(145deg, #10b981, #059669);
        }
        
        .firmware-btn.secondary {
            background: linear-gradient(145deg, #6b7280, #4b5563);
        }
        
        .firmware-btn.danger {
            background: linear-gradient(145deg, #ef4444, #dc2626);
        }
        
        .db-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
        
        .db-stat {
            text-align: center;
            background: rgba(139, 92, 246, 0.1);
            padding: 15px;
            border-radius: 8px;
        }
        
        .db-operations {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            padding: 8px 0;
            border-bottom: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .info-row:last-child {
            border-bottom: none;
        }
        
        .info-label {
            color: #ccc;
            font-weight: 600;
        }
        
        .info-value {
            color: #8b5cf6;
            font-family: monospace;
        }
        
        .license-type {
            background: linear-gradient(145deg, #8b5cf6, #a855f7);
            color: white;
            padding: 10px;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 15px;
        }
        
        .license-key {
            background: rgba(42, 42, 42, 0.8);
            color: #10b981;
            padding: 10px;
            border-radius: 6px;
            font-family: monospace;
            font-size: 12px;
            margin: 10px 0;
            word-break: break-all;
        }
        
        .license-expiry, .license-status {
            margin: 8px 0;
            color: #ccc;
        }
        
        .license-status.active {
            color: #10b981;
            font-weight: bold;
        }
        
        .license-buttons, .tool-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        
        .farm-buttons, .command-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        
        .farm-btn.start {
            background: linear-gradient(145deg, #10b981, #059669);
        }
        
        .farm-btn.stop {
            background: linear-gradient(145deg, #ef4444, #dc2626);
        }
        
        .farm-btn.pause {
            background: linear-gradient(145deg, #f59e0b, #d97706);
        }
        
        .farm-btn.config {
            background: linear-gradient(145deg, #6b7280, #4b5563);
        }
        
        .terminal-output {
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 6px;
            padding: 15px;
            height: 200px;
            overflow-y: auto;
            font-family: monospace;
            margin-bottom: 15px;
        }
        
        .terminal-line {
            color: #10b981;
            margin: 5px 0;
            font-size: 14px;
        }
        
        .terminal-input {
            display: flex;
            align-items: center;
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 6px;
            padding: 10px;
        }
        
        .terminal-prompt {
            color: #8b5cf6;
            font-family: monospace;
            margin-right: 10px;
        }
        
        .command-input {
            flex: 1;
            background: transparent;
            border: none;
            color: white;
            font-family: monospace;
            outline: none;
        }
        
        .callback-items, .error-items {
            max-height: 300px;
            overflow-y: auto;
        }
        
        .callback-item, .error-item {
            display: flex;
            align-items: center;
            padding: 10px;
            margin: 8px 0;
            background: rgba(139, 92, 246, 0.1);
            border-radius: 6px;
            gap: 15px;
        }
        
        .callback-status {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            flex-shrink: 0;
        }
        
        .callback-status.success {
            background: #10b981;
        }
        
        .callback-status.failed {
            background: #ef4444;
        }
        
        .callback-url {
            flex: 1;
            color: #ccc;
            font-family: monospace;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .callback-time {
            color: #8b5cf6;
            font-size: 12px;
        }
        
        .log-controls {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            align-items: center;
        }
        
        .log-filter {
            background: rgba(42, 42, 42, 0.8);
            border: 1px solid #8b5cf6;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
        }
        
        .log-viewer {
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 6px;
            padding: 15px;
            height: 400px;
            overflow-y: auto;
            font-family: monospace;
        }
        
        .log-entry {
            display: flex;
            margin: 5px 0;
            padding: 8px;
            border-radius: 4px;
            background: rgba(42, 42, 42, 0.3);
        }
        
        .log-time {
            color: #666;
            margin-right: 15px;
            min-width: 80px;
        }
        
        .log-level {
            margin-right: 15px;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            min-width: 60px;
            text-align: center;
        }
        
        .log-level.info {
            background: rgba(59, 130, 246, 0.2);
            color: #3b82f6;
        }
        
        .log-level.warning {
            background: rgba(245, 158, 11, 0.2);
            color: #f59e0b;
        }
        
        .log-level.error {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
        }
        
        .log-message {
            color: #ccc;
            flex: 1;
        }
        
        .error-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }
        
        .error-stat {
            text-align: center;
            padding: 15px;
            border-radius: 8px;
        }
        
        .error-stat.critical {
            background: rgba(239, 68, 68, 0.2);
            border: 1px solid #ef4444;
        }
        
        .error-stat.high {
            background: rgba(245, 158, 11, 0.2);
            border: 1px solid #f59e0b;
        }
        
        .error-stat.medium {
            background: rgba(59, 130, 246, 0.2);
            border: 1px solid #3b82f6;
        }
        
        .error-stat.low {
            background: rgba(139, 92, 246, 0.2);
            border: 1px solid #8b5cf6;
        }
        
        .error-count {
            display: block;
            font-size: 24px;
            font-weight: bold;
            color: white;
        }
        
        .error-label {
            display: block;
            font-size: 12px;
            color: #ccc;
            margin-top: 5px;
        }
        
        .error-severity {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            min-width: 80px;
            text-align: center;
        }
        
        .error-item.critical .error-severity {
            background: #ef4444;
            color: white;
        }
        
        .error-item.high .error-severity {
            background: #f59e0b;
            color: white;
        }
        
        .error-item.medium .error-severity {
            background: #3b82f6;
            color: white;
        }
        
        .error-desc {
            flex: 1;
            color: #ccc;
            margin: 0 15px;
        }
        
        .error-time {
            color: #8b5cf6;
            font-size: 12px;
        }
        
        .system-grid {
            grid-template-columns: 1fr 1fr;
        }
        
        .resource-monitors {
            margin-top: 15px;
        }
        
        .resource-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            gap: 15px;
        }
        
        .resource-label {
            color: #ccc;
            min-width: 80px;
            font-size: 14px;
        }
        
        .resource-bar {
            flex: 1;
            height: 12px;
            background: rgba(42, 42, 42, 0.8);
            border-radius: 6px;
            overflow: hidden;
        }
        
        .resource-fill {
            height: 100%;
            background: linear-gradient(90deg, #8b5cf6, #a855f7);
            transition: width 0.3s ease;
        }
        
        .resource-value {
            color: #8b5cf6;
            font-weight: bold;
            min-width: 40px;
            text-align: right;
        }

        /* Scrollbar styling */
        #client-content::-webkit-scrollbar, #sidebar-tabs::-webkit-scrollbar {
            width: 8px;
        }
        
        #client-content::-webkit-scrollbar-track, #sidebar-tabs::-webkit-scrollbar-track {
            background: #2a2a2a;
        }
        
        #client-content::-webkit-scrollbar-thumb, #sidebar-tabs::-webkit-scrollbar-thumb {
            background: #8b5cf6;
            border-radius: 4px;
        }
        
        #client-content::-webkit-scrollbar-thumb:hover, #sidebar-tabs::-webkit-scrollbar-thumb:hover {
            background: #a855f7;
        }
        
        /* Animations */
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        
        .status-dot.active {
            animation: pulse 2s infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1000px) {
            #blooket-client-ui {
                width: 90vw;
                height: 80vh;
            }
            
            .dashboard-grid {
                grid-template-columns: 1fr;
                grid-template-rows: auto auto auto;
            }
            
            .feature-card.large {
                grid-row: auto;
            }
        }
    </style>
    `;
    
    // Add styles to head
    document.head.insertAdjacentHTML('beforeend', styles);
    
    // Add UI to page
    document.body.appendChild(clientUI);
    
    // --- NEW: Toggle functionality ---
    const uiContainer = document.getElementById('blooket-client-ui');
    const toggleButton = document.getElementById('toggle-ui-btn');

    toggleButton.addEventListener('click', () => {
        uiContainer.classList.toggle('ui-hidden');
        toggleButton.classList.toggle('closed');
    });

    // State variables
    let isFullscreen = false;
    let isSidebarLocked = false;
    let sidebarOpen = true;

    // Make draggable
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    const header = document.getElementById('client-header');
    const windowElement = document.getElementById('client-window');
    
    header.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        if (isFullscreen) return;
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === header || header.contains(e.target)) {
            isDragging = true;
        }
    }

    function drag(e) {
        if (isDragging && !isFullscreen) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            xOffset = currentX;
            yOffset = currentY;

            clientUI.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    // Sidebar functionality
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarLock = document.getElementById('sidebar-lock');

    sidebarToggle.addEventListener('click', () => {
        if (!isSidebarLocked) {
            sidebarOpen = !sidebarOpen;
            sidebar.classList.toggle('sidebar-closed', !sidebarOpen);
        }
    });

    sidebarLock.addEventListener('click', () => {
        isSidebarLocked = !isSidebarLocked;
        sidebarLock.classList.toggle('locked', isSidebarLocked);
        sidebarLock.textContent = isSidebarLocked ? '🔒' : '🔓';
        sidebar.classList.toggle('sidebar-locked', isSidebarLocked);

        if (isSidebarLocked && !sidebarOpen) {
            sidebarOpen = true;
            sidebar.classList.remove('sidebar-closed');
        }
    });

    sidebar.addEventListener('mouseenter', () => {
        if (!isSidebarLocked && !sidebarOpen) {
            sidebarOpen = true;
            sidebar.classList.remove('sidebar-closed');
        }
    });

    sidebar.addEventListener('mouseleave', () => {
        if (!isSidebarLocked) {
            sidebarOpen = false;
            sidebar.classList.add('sidebar-closed');
        }
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.sidebar-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });

    // Window control functionality
    document.getElementById('close-btn').addEventListener('click', () => {
        clientUI.remove();
        toggleButton.remove(); // Also remove the toggle button
    });
    
    document.getElementById('minimize-btn').addEventListener('click', () => {
        const content = document.getElementById('client-content');
        const sidebar = document.getElementById('sidebar');
    
        if (content.style.display === 'none') {
            content.style.display = 'block';
            sidebar.style.display = 'flex';
            clientUI.style.height = isFullscreen ? '100vh' : '600px';
        } else {
            content.style.display = 'none';
            sidebar.style.display = 'none';
            clientUI.style.height = 'auto';
        }
    });

    document.getElementById('fullscreen-btn').addEventListener('click', () => {
        isFullscreen = !isFullscreen;
        clientUI.classList.toggle('fullscreen', isFullscreen);

        if (isFullscreen) {
            clientUI.setAttribute('data-old-transform', clientUI.style.transform || 'none');
            clientUI.style.transform = 'none';
            xOffset = 0;
            yOffset = 0;
        } else {
            const oldTransform = clientUI.getAttribute('data-old-transform');
            if (oldTransform && oldTransform !== 'none') {
                clientUI.style.transform = oldTransform;
            }
        }
    });

    // Interactive slider functionality
    document.getElementById('speed-slider').addEventListener('input', (e) => {
        document.getElementById('speed-value').textContent = e.target.value;
    });

    document.getElementById('delay-slider').addEventListener('input', (e) => {
        document.getElementById('delay-value').textContent = e.target.value + 'ms';
    });

    // Admin terminal functionality
    const adminCommand = document.getElementById('admin-command');
    const terminalOutput = document.getElementById('terminal-output');

    if (adminCommand) {
        adminCommand.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const command = e.target.value.trim();
                if (command) {
                    executeAdminCommand(command);
                    e.target.value = '';
                }
            }
        });
    }

    // Quick command buttons
    document.querySelectorAll('.cmd-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const command = btn.getAttribute('data-cmd');
            executeAdminCommand(command);
        });
    });

    function executeAdminCommand(command) {
        const output = document.getElementById('terminal-output');
        if (!output) return;

        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.innerHTML = `$ ${command}`;
        output.appendChild(commandLine);

        setTimeout(() => {
            const resultLine = document.createElement('div');
            resultLine.className = 'terminal-line';

            switch(command) {
                case 'status':
                    resultLine.innerHTML = '✓ All systems operational';
                    break;
                case 'restart':
                    resultLine.innerHTML = '🔄 Services restarted successfully';
                    break;
                case 'backup':
                    resultLine.innerHTML = '💾 Backup created: backup_' + Date.now() + '.db';
                    break;
                case 'clear':
                    output.innerHTML = '<div class="terminal-line">$ Terminal cleared</div>';
                    return;
                case 'help':
                    resultLine.innerHTML = 'Available commands: status, restart, backup, clear, help';
                    break;
                default:
                    resultLine.innerHTML = `❌ Unknown command: ${command}`;
            }
            
            output.appendChild(resultLine);
            output.scrollTop = output.scrollHeight;
        }, 500);
        
        output.scrollTop = output.scrollHeight;
    }
    
    // Log filter functionality
    const logFilter = document.querySelector('.log-filter');
    if (logFilter) {
        logFilter.addEventListener('change', (e) => {
            const filterValue = e.target.value;
            const logEntries = document.querySelectorAll('.log-entry');

            logEntries.forEach(entry => {
                if (filterValue === 'all') {
                    entry.style.display = 'flex';
                } else {
                    const level = entry.querySelector('.log-level').textContent.toLowerCase();
                    entry.style.display = level === filterValue ? 'flex' : 'none';
                }
            });
        });
    }

    // Update stats periodically (demo)
    let gameTime = 0;
    setInterval(() => {
        const scoreElement = document.getElementById('current-score');
        const questionElement = document.getElementById('question-count');
        const accuracyElement = document.getElementById('accuracy');
        const timeElement = document.getElementById('time-played');

        if (scoreElement && questionElement && accuracyElement && timeElement) {
            scoreElement.textContent = Math.floor(Math.random() * 10000);
            questionElement.textContent = Math.floor(Math.random() * 100);
            accuracyElement.textContent = (85 + Math.random() * 15).toFixed(1) + '%';
            
            gameTime++;
            const minutes = Math.floor(gameTime / 60);
            const seconds = gameTime % 60;
            timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
    
    // Update system resources periodically
    setInterval(() => {
        const cpuFill = document.querySelector('.resource-item:nth-child(1) .resource-fill');
        const memFill = document.querySelector('.resource-item:nth-child(2) .resource-fill');
        const diskFill = document.querySelector('.resource-item:nth-child(3) .resource-fill');

        const cpuValue = document.querySelector('.resource-item:nth-child(1) .resource-value');
        const memValue = document.querySelector('.resource-item:nth-child(2) .resource-value');
        const diskValue = document.querySelector('.resource-item:nth-child(3) .resource-value');

        if (cpuFill && memFill && diskFill) {
            const cpu = Math.floor(Math.random() * 60 + 20);
            const mem = Math.floor(Math.random() * 40 + 50);
            const disk = Math.floor(Math.random() * 30 + 10);

            cpuFill.style.width = cpu + '%';
            memFill.style.width = mem + '%';
            diskFill.style.width = disk + '%';

            if (cpuValue) cpuValue.textContent = cpu + '%';
            if (memValue) memValue.textContent = mem + '%';
            if (diskValue) diskValue.textContent = disk + '%';
        }
    }, 2000);
    
    // Auto-update data metrics
    setInterval(() => {
        const totalGames = document.getElementById('total-games');
        const winRate = document.getElementById('win-rate');
        const avgScore = document.getElementById('avg-score');

        if (totalGames) {
            totalGames.textContent = (parseInt(totalGames.textContent.replace(/,/g, '')) + Math.floor(Math.random() * 3)).toLocaleString();
        }
        if (winRate) {
            const rate = (85 + Math.random() * 10).toFixed(1);
            winRate.textContent = rate + '%';
        }
        if (avgScore) {
            avgScore.textContent = (8000 + Math.floor(Math.random() * 2000)).toLocaleString();
        }
    }, 5000);

    // Simulate new log entries
    setInterval(() => {
        const logViewer = document.getElementById('log-viewer');
        if (logViewer && Math.random() > 0.7) {
            const logTypes = ['info', 'warning', 'error'];
            const messages = [
                'User authentication successful',
                'Cache cleared successfully',
                'Database connection established',
                'High CPU usage detected',
                'Memory optimization completed',
                'Network timeout occurred',
                'Backup process started'
            ];
            
            const logType = logTypes[Math.floor(Math.random() * logTypes.length)];
            const message = messages[Math.floor(Math.random() * messages.length)];
            const time = new Date().toLocaleTimeString();

            const logEntry = document.createElement('div');
            logEntry.className = `log-entry ${logType}`;
            logEntry.innerHTML = `
                <span class="log-time">${time}</span>
                <span class="log-level ${logType}">${logType.toUpperCase()}</span>
                <span class="log-message">${message}</span>
            `;

            logViewer.appendChild(logEntry);
            logViewer.scrollTop = logViewer.scrollHeight;

            const entries = logViewer.querySelectorAll('.log-entry');
            if (entries.length > 50) {
                entries[0].remove();
            }
        }
    }, 3000);
    
    console.log('🎮 Blooket Client Pro UI loaded successfully!');
    console.log('📋 Keyboard shortcuts:');
    console.log('   Ctrl+Shift+F: Toggle Fullscreen');
    console.log('   Ctrl+Shift+M: Minimize/Restore');
    console.log('   Ctrl+Shift+S: Toggle Sidebar');
    console.log('🚀 All ' + document.querySelectorAll('.sidebar-tab').length + ' tabs loaded successfully!');
})();


})(); // End of main IIFE
