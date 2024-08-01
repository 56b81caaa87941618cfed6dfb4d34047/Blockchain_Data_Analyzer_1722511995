/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722512000", {
    template: `
    <section id="cta-section-container" class="bg-gradient-to-br from-pink-500 via-purple-600 to-magenta-700 min-h-screen flex items-center justify-center">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 shadow-lg border border-white/20">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-3xl opacity-50"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-2xl bg-magenta-400 opacity-70">
                    </div>
                </div>
                <!-- Cosmic landscape -->
                <div id="cosmic-landscape" class="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-full">
                        <path fill="rgba(255,255,255,0.1)" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center relative z-10">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-lg text-pink-200 mb-2">Harness the Potential of Blockchain Data</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 text-4xl md:text-5xl font-bold text-white mb-6">Unlock the Power of Blockchain Analytics</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-pink-100">Gain valuable insights into emerging blockchain data with our cutting-edge analysis platform. Uncover trends, identify opportunities, and stay ahead of the curve.</p></div>
                    <a id="content-cta-button" href="#0" class="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                        Get Started 
                        <span id="content-cta-arrow" class="ml-2">
                            <i class='bx bx-right-arrow-alt'></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
                    