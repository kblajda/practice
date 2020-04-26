class RangeSlider {
    constructor(container) {
        this.cacheDOM(container)
        this.setValues()
    }
    cacheDOM(container) {

        this.refs = {};
        this.refs.container = document.querySelector(container);

        this.refs.slider = this.refs.container.querySelector('[data-range-slider]')
            //get min/max/value/steps/ from html
        this.refs.minValue = this.refs.slider.getAttribute('min')
        this.refs.maxValue = this.refs.slider.getAttribute('max')
        this.refs.value = this.refs.slider.getAttribute('value')
        this.refs.steps = this.refs.slider.getAttribute('step')
        this.refs.priceValue = this.refs.container.querySelector('.slider-price span').textContent;

        //html start values
        this.refs.minDefault = this.refs.container.querySelector('.min-value span')
        this.refs.currentDefault = this.refs.container.querySelector('.current-value span')
        this.refs.maxDefault = this.refs.container.querySelector('.max-value span')
        this.refs.packagePrice = this.refs.container.querySelector('[data-price]').textContent;
        this.refs.packageCounter = this.refs.container.querySelector('[data-counter]').textContent;



        // results
        this.refs.totalSizeValue = document.querySelector('.sizePrice span')
        this.refs.totalMonthValue = document.querySelector('.monthPrice span')
        this.refs.totalValue = document.querySelector('.totalPrice span')
    }
    setValues() {
        this.refs.minDefault.innerHTML = this.refs.minValue
        this.refs.currentDefault.innerHTML = this.refs.value
        this.refs.maxDefault.innerHTML = this.refs.maxValue
    }
    getCurretnValue(value) {
        this.refs.currentDefault.innerHTML = value;
    }
    setSizePrice(value) {
        let priceParse = parseInt(this.refs.packagePrice)
        let counterParse = parseInt(this.refs.packageCounter)
        if (isNaN(counterParse)) {
            let totalPacakgePrice = (value * priceParse);
            this.refs.totalSizeValue.innerHTML = `<span id="sizePrice">${totalPacakgePrice}</span>%/${value}GB`;

        } else {
            let totalPacakgePrice = ((value / counterParse) * priceParse);
            this.refs.totalSizeValue.innerHTML = `<span id="sizePrice">${totalPacakgePrice}</span>$/${value}GB`;

        }
    }
    setMonthPrice(value) {
        let priceParse = parseInt(this.refs.packagePrice)
        let counterParse = parseInt(this.refs.packageCounter)
        if (isNaN(counterParse)) {
            let totalPacakgePrice = (value * priceParse);
            this.refs.totalMonthValue.innerHTML = `<span id="monthPrice">${totalPacakgePrice}</span>$/${value} Month's`;

        } else {
            let totalPacakgePrice = ((value / counterParse) * priceParse);
            this.refs.totalMonthValue.innerHTML = `<span id="monthPrice">${totalPacakgePrice}</span>$/${value} Month's`;

        }
    }
    setTotalPrice() {

        let price1 = this.refs.totalMonthValue.querySelector('#monthPrice').textContent
        let price2 = this.refs.totalSizeValue.querySelector('#sizePrice').textContent

        let totalPrice = (parseInt(price1) + parseInt(price2))
        this.refs.totalValue.innerHTML = `${totalPrice} $`

    }
}

let rangeSliderMethods1 = new RangeSlider('.silder-first')
let rangeSliderMethods2 = new RangeSlider('.silder-second')

$('#slider1').rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
            rangeSliderMethods1.getCurretnValue(value)
        },
        onInit: function() {
            rangeSliderMethods1.setValues()
        },
        onSlideEnd: function(position, value) {
            rangeSliderMethods1.setSizePrice(value)
            rangeSliderMethods1.setTotalPrice()(value)
        }
    }

);

$('#slider2').rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
            rangeSliderMethods2.getCurretnValue(value)
        },
        onInit: function() {
            rangeSliderMethods2.setValues()
        },
        onSlideEnd: function(position, value) {
            rangeSliderMethods2.setMonthPrice(value)
            rangeSliderMethods2.setTotalPrice()
        }
    }

);

// min max step value