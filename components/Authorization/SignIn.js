const Sign = ({ children }) => {
  const auth = true;

  if (!auth) {
    return <div>chưa đăng nhập</div>;
  }
  return children;
};

export default Sign;
