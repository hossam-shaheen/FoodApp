export const formatPrice = (price:number, locale = 'en-US', currency = 'USD') => {

    if (typeof price !== 'number' || isNaN(price)) {
        throw new Error('Invalid price. Price must be a number.');
    }

    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    });


    return formatter.format(price);
};
