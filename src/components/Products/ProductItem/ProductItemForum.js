import Input from '../../UI/Input';

const ProductItemForum = props => {
  return (
    <form>
      <Input label="Amount" input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
    <button>+ Order Me!</button>
    </form>
  );

};

export default ProductItemForum