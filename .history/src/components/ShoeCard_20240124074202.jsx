const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImage === imgURL
        ? ' border-coral-red'
        : 'border-transparent'
      } cursor-pointer
    `}>

    </div>
  )
};

export default ShoeCard;
