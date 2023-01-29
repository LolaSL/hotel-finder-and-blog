import React, {u} from 'react'
import { useParams } from "react-router-dom";



const PlaceDetail = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const { data: product } = await productService.getProduct(id);
      setProduct(place);
      setIsLoading(false);
    }
    fetchData();
  }, [id]);
  return (
    <div>
      <h1>{place.title}</h1>
    </div>
  )
}

export default PlaceDetail