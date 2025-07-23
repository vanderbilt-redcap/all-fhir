import init from './lib'

function addScript(url: string) {
    var header = document.querySelector('head')
    if(!header) return
    const script = document.createElement('script')
    script.setAttribute('defer', 'true')
    script.src = url
    header.appendChild(script)
}

function addStyle(url: string) {
    var header = document.querySelector('head')
    if(!header) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = url
    header.appendChild(link)
}


const start = async () => {

    init('#app')
}

if (import.meta.env.MODE === 'development') {
    // add redcap styles in dev
    addStyle('/redcap/redcap_v999.0.0/Resources/webpack/css/bundle.css')
    addStyle('/redcap_v999.0.0/Resources/webpack/css/bootstrap.min.css')
    addStyle(
        '/redcap/redcap_v999.0.0/Resources/webpack/css/fontawesome/css/all.min.css'
    )
    start()
}

export {addScript, addStyle}