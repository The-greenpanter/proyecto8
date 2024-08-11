import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Definición del tipo de datos para los artículos
interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Article[] = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Error al obtener los artículos. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const MAX_DESCRIPTION_LENGTH = 100;

  if (loading) {
    return <p>Cargando artículos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {articles.map((article) => (
          <div className="col-md-6 d-flex mb-4" key={article.id}>
            <div className="card py-2 mb-4 shadow-sm h-100">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text flex-grow-1">
                  {article.description.length > MAX_DESCRIPTION_LENGTH
                    ? `${article.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
                    : article.description}
                </p>
                <p className="card-text"><strong>Valor: ${article.price}</strong></p>
                <div className="btn-group mt-auto">
                  <Link to={`/article/${article.id}`} className="btn btn-primary">Leer más</Link>
                  <a href="/" className="btn btn-secondary">Comprar ahora</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
