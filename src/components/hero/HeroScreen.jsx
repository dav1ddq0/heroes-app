import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroeById";
import { heroImages } from "../../helpers/heroImages";

export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroesById(heroId), [heroId]);

  const handleReturn = () => {
    navigate(-1);
  };
  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

    
  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img
          src={heroImages(`./${id}.jpg`)}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {" "}
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher: </b>
            {publisher}
          </li>

          <li className="list-group-item">
            {" "}
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
