class GridView {
    /**
     * properties
     * @param [array] _tableClass - css стили оформления
     * @param [array] data - вхожные данные
     * @param [array] _attribute - управляем выводом
     * @param [array] _element - куда выводить таблицу
     * @param [array] _header - заголовок таблицы
     * @param [array] _headerClass - сss классы заголовка
     */

    constructor() {
        this._header = []
        this._headerClass = []
        this._tableClass = []
        this._element = 'body'
        this._attribute = []
        this._data = []
    }

    /**
     * Method set header
     */

    set header(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim()
            return true
        }
        return false
    }

    /**
     * Method set header
     */

    set headerClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass
            return true
        }
        return false
    }

    /**
     * Method set header
     */

    set element(element) {
        if (document.querySelector(element)) {
            this._element = document.querySelector(element)
            return true
        }
        return false
    }

    /**
     * Method for show GridViewTable
     */

    render() {
        // Create table
        const table = document.createElement('table')
        // Add table to page
        document.querySelector('body').prepend(table)
        // Create th and add to page  
        let tr = document.createElement('tr')
        table.append(tr)
        this._header.forEach(el => {
            let th = document.createElement('th')
            th.innerHTML = el
            tr.append(th)
        })
        this._data.forEach(el => {
            let trow = document.createElement('tr')
            for (let key in el) {
                let td = document.createElement('td')
                td.innerHTML = el[key]
                trow.append(td)
            }
            table.append(trow)
        })
    }
}