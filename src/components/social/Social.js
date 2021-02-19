import React from "react";
import "./Social.css";
import { Constants } from "../../assets/const/Constants";
import { Icon } from "../icons";

const Social = () => (
  <ul class="list-inline mb-0">
    {Constants.socialMedia &&
      Constants.socialMedia.map(({ url, name }, i) => (
        <li class="list-inline-item" key={i}>
          <a class="a-social" href={url} aria-label={name}>
            <Icon name={name} />
          </a>
        </li>
      ))}
  </ul>
);

export default Social;
