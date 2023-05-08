type priceFormat = {
    price: number;
    local: 'ru' | 'en' | 'eu';
    currency: 'rub' | 'usd' | 'eur'    
}

export const priceFormat = ({price, local, currency}:priceFormat) => {
    const formater = Intl.NumberFormat(local, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    })
    return formater.format(price)
}