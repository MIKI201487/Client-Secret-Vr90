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
        p.onerror = p.onabort = null, d(), document.querySelector("iframe").contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }
})();
