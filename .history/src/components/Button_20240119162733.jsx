const Button = ({ label, iconURL}) => {
    return (
        <button className="">
            {label}
            <img src={iconUrl}
             alt="" />
      </button>
  )
};

export default Button;
