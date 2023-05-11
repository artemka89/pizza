import { PizzaItem } from '../../../redux/pizza/types'
import { priceFormat } from '../../../utils/priceFormat'
import { AddToCartBtn } from '../../ui/AddToCartBtn/AddToCartBtn'
import styles from './PizzasPopular.module.scss'

type PizzasPopularProps = {
  item: PizzaItem
}

export const PizzasPopular: React.FC<PizzasPopularProps> = ({item}) => {

  const price = priceFormat({
    price: item.price[0],
    local: 'ru',
    currency: 'rub'
  })

  return (
    <div className={styles.pizza}>
      <div className={styles.image}>
        <img src={item.imageUrl} alt="Pizza" />
      </div>
      <div className={styles.title}><span>{item.title}</span></div>
      <div className={styles.price}>от {price}</div>
      <div className={styles.addBnt}></div>     
      {/* <AddToCartBtn onClickAdd={() => {}}>
        <p>В корзину</p>
      </AddToCartBtn> */}
      
    </div>
  )
}
