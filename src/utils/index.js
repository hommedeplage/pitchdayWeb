export const smoothScroll = {
    timer: null,

    stop: function() {
        clearTimeout(this.timer);
    },

    scrollTo: function(id, callback) {
        const settings = {
            duration: 1000,
            easing: {
                outQuint: function(x, t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                },
            },
        };
        let percentage;
        let startTime;
        let node = document.getElementById(id);
        const nodeTop = node.offsetTop;
        let nodeHeight = node.offsetHeight;
        let body = document.body;
        let html = document.documentElement;
        let height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight,
        );
        let windowHeight = window.innerHeight;
        let offset = window.pageYOffset;
        let delta = nodeTop - offset;
        let bottomScrollableY = height - windowHeight;
        let targetY =
            bottomScrollableY < delta
                ? bottomScrollableY -
                  (height - nodeTop - nodeHeight + offset - 20)
                : delta - 20;

        startTime = Date.now();
        percentage = 0;

        if (this.timer) {
            clearInterval(this.timer);
        }

        function step() {
            let yScroll;
            let elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(
                    0,
                    elapsed,
                    offset,
                    targetY,
                    settings.duration,
                );
                window.scrollTo(0, yScroll);
                this.timer = setTimeout(step, 10);
            }
        }

        this.timer = setTimeout(step, 10);
    },
};

const validateEmail = email => {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const ValidateNewsletter = email => {
    if (validateEmail(email)) {
        return true;
    }
};

export const getTranslation = language => {
    return require(`../localization/${language}.json`);
};

export const getLanguage = store => {
    const languages = navigator.languages
        ? navigator.languages[0]
        : navigator.language || navigator.userLanguage;

    const lang = store
        .getState()
        .locale.languages.filter(lang => languages.includes(lang.code));

    if (localStorage.getItem('defaultLocale')) {
        // if (localStorage.getItem('defaultLocale') !== lang[0].code)
        // {
        // 	localStorage.setItem('defaultLocale', lang[0].code);
        // 	return lang[0].code;
        // }
        // else
        // {
        return localStorage.getItem('defaultLocale');
        // }
    }

    if (lang) {
        localStorage.setItem('defaultLocale', lang[0].code);
        return lang[0].code;
    } else {
        localStorage.setItem('defaultLocale', 'en');
        return 'en';
    }
};

export const getInitials = e => {
    // eslint-disable-next-line
    String.prototype.hashCode = function() {
        let hash = 0;
        let i;
        let chr;
        let len;
        if (this.length === 0) {
            return hash;
        }
        for (i = 0, len = this.length; i < len; i++) {
            chr = this.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    // eslint-disable-next-line
    String.prototype.getInitials = function(glue) {
        if (typeof glue === 'undefined') {
            // eslint-disable-next-line
            const glue = true;
        }

        let initials = this.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g);

        if (glue) {
            return initials.join('').substring(0, 2);
        }

        return initials.substring(0, 2);
    };

    for (let i = 0; i < e.length; i++) {
        e[i].setAttribute(
            'data-initials',
            e[i].getAttribute('data-name').getInitials(' '),
        );
        e[i].setAttribute(
            'data-type',
            'v' + Math.abs(e[i].getAttribute('data-name').hashCode()) % 3,
        );
    }
};
