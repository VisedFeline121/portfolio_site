import React from "react";

// Import all SVG icons - using actual file names
import CSSIcon from "../../assets/icons/techs/frontend/css.svg";
import HTMLIcon from "../../assets/icons/techs/frontend/html.svg";
import JavaScriptIcon from "../../assets/icons/techs/frontend/javascript.svg";
import ReactIcon from "../../assets/icons/techs/frontend/react.svg";
import TypeScriptIcon from "../../assets/icons/techs/frontend/typescript.svg";

import DjangoIcon from "../../assets/icons/techs/backend/django.svg";
import FastAPIIcon from "../../assets/icons/techs/backend/fastapi.svg";
import NginxIcon from "../../assets/icons/techs/backend/nginx.svg";
import NodeJSIcon from "../../assets/icons/techs/backend/nodejs.svg";
import PythonIcon from "../../assets/icons/techs/backend/python.svg";
import RabbitMQIcon from "../../assets/icons/techs/backend/rabbitmq.svg";

import MongoDBIcon from "../../assets/icons/techs/database/mongodb.svg";
import MySQLIcon from "../../assets/icons/techs/database/mysql.svg";
import RedisIcon from "../../assets/icons/techs/database/redis.svg";

import BashIcon from "../../assets/icons/techs/tools/bash.svg";
import DockerIcon from "../../assets/icons/techs/tools/docker.svg";
import GitIcon from "../../assets/icons/techs/tools/git.svg";
import PyCharmIcon from "../../assets/icons/techs/tools/pycharm.svg";
import VSCodeIcon from "../../assets/icons/techs/tools/vscode.svg";

// Map technology names to their imported SVG components
const ICON_MAP: { [key: string]: string } = {
    // Frontend
    React: ReactIcon,
    TypeScript: TypeScriptIcon,
    JavaScript: JavaScriptIcon,
    HTML: HTMLIcon,
    CSS: CSSIcon,

    // Backend
    Python: PythonIcon,
    "Node.js": NodeJSIcon,
    Django: DjangoIcon,
    FastAPI: FastAPIIcon,
    Nginx: NginxIcon,
    RabbitMQ: RabbitMQIcon,

    // Database
    MongoDB: MongoDBIcon,
    MySQL: MySQLIcon,
    Redis: RedisIcon,

    // Tools
    Git: GitIcon,
    Docker: DockerIcon,
    "VS Code": VSCodeIcon,
    Bash: BashIcon,
    PyCharm: PyCharmIcon,
};

interface TechIconProps {
    name: string;
    className?: string;
    size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({
    name,
    className = "",
    size = 24,
}) => {
    const iconSrc = ICON_MAP[name];

    if (!iconSrc) {
        // Return a simple text fallback if no icon is found
        return (
            <span
                className={`${className} tech-icon-fallback`}
                style={{
                    width: size,
                    height: size,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: size * 0.6,
                    fontWeight: "bold",
                    color: "var(--text-gray)",
                    backgroundColor: "var(--light-lavender)",
                    borderRadius: "4px",
                }}
            >
                {name.charAt(0)}
            </span>
        );
    }

    return (
        <img
            src={iconSrc}
            alt={`${name} icon`}
            className={`${className} tech-icon`}
            style={{ width: size, height: size }}
        />
    );
};

export default TechIcon;
