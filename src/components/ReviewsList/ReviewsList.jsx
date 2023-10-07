const ReviewsList = ({ reviews }) => {
  console.log(reviews);

  if (!reviews.length) {
    return <p>No information about reviews</p>;
  }

  return <div>ReviewsList</div>;
};

export default ReviewsList;
