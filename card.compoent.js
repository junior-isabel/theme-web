
class Card extends HTMLElement {
  img;
  description; btnOk;
  figcaption; card
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.card = document.createElement('div')
    this.card.setAttribute('class', 'card')
    const classList = this.hasAttribute('class') ? this.getAttribute('class').split(' ') : []

    classList.forEach(cl => { this.card.classList.add(cl) })

    const figure = this.card.appendChild(document.createElement('figure'))
    this.description = this.card.appendChild(document.createElement('p'))
    const footer = this.card.appendChild(document.createElement('div'))

    this.description.textContent = this.getAttribute('data-description')
    footer.setAttribute('class', 'card-footer')

    this.img = figure.appendChild(document.createElement('img'))
    this.figcaption = figure.appendChild(document.createElement('figcaption'))
    this.img.src = this.hasAttribute('src') ? this.getAttribute('src') : './images/default.jpeg'
    this.figcaption.textContent = this.getAttribute('data-title')

    this.btnOk = footer.appendChild(document.createElement('button'))
    this.btnOk.textContent = this.hasAttribute('data-confirm-text') ? this.getAttribute('data-confirm-text') : 'Ok'
    const style = document.createElement('link')
    style.setAttribute('rel', 'stylesheet')
    style.setAttribute('href', './card.css')
    
    this.shadowRoot.appendChild(style)
    this.shadowRoot.appendChild(this.card)
  }
  attributeChangedCallback(name, olderValue, newValue) {
    if (name === 'data-title') {
      this.figcaption.textContent = newValue
    } else if (name === 'data-description') {
      this.description.textContent = newValue
    } else if (name === 'class') {
      const classList = this.hasAttribute('class') ? this.getAttribute('class').split(' ') : []
      classList.forEach(cl => {
        this.card.classList.add(cl)
      })
    }else if (name === 'src'){
      this.img.src = newValue
    }else if (name === 'data-confirm-text') {
      this.btnOk.textContent = newValue
    }
  }
  static get observedAttributes() {
    return ['class', 'data-title', 'data-description', 'data-confirm-text', 'src']
  }
}

customElements.define('app-card', Card)