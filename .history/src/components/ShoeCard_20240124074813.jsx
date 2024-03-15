const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.big)
    }
  }

  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImg === imgURL
        ? ' border-coral-red'
        : 'border-transparent'
      } cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
      <div>
        <img s />
        src={imgURL.thumbnail}
        alt="shoe collection"
        width={127}
        height={}
      </div>
    </div>
  )
};

export default ShoeCard;
