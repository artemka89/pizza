import { PizzaItem } from '../../../redux/pizzas/types'
import { priceFormat } from '../../../utils/priceFormat'
import { AddToCartBtn } from '../../ui/AddToCartBtn/AddToCartBtn'
import styles from './PizzaRelated.module.scss'

type PizzaRelatedProps = {
  item: PizzaItem
}

export const PizzaRelated: React.FC<PizzaRelatedProps> = ({item}) => {

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
      <AddToCartBtn onClickAdd={() => {}}>
        <p>В корзину</p>
      </AddToCartBtn>
      
    </div>
  )
}
