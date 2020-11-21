import React from "react";
import { Link } from 'react-router-dom';
import Button from "../Button/button";
import './auth.css';

const Login = () => (
    <main className="auth-page">
        <h1 className="heading__auth">Sign In</h1>
        <figure aria-label='decorative'>
            <svg width="229" height="137" viewBox="0 0 229 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M175.328 135.362C172.396 132.884 170.615 128.971 171.082 125.161C171.549 121.351 174.442 117.849 178.194 117.04C181.946 116.231 186.223 118.47 187.363 122.136C187.99 115.069 188.713 107.707 192.47 101.689C195.871 96.24 201.764 92.3411 208.149 91.6436C214.535 90.946 221.258 93.5805 225.241 98.6206C229.223 103.661 230.198 110.988 227.409 116.775C225.354 121.037 221.569 124.21 217.602 126.79C204.786 135.06 189.414 138.423 174.315 136.26L175.328 135.362Z" fill="#F2F2F2" />
                <path d="M218.926 93.7265C213.657 98.0181 208.823 102.818 204.495 108.057C197.721 116.227 192.239 125.388 188.241 135.219C187.948 135.936 189.112 136.249 189.402 135.539C195.944 119.561 206.388 105.478 219.778 94.5781C220.379 94.0885 219.522 93.2409 218.926 93.7265Z" fill="white" />
                <path d="M73.7188 134.689C77.7457 131.286 80.1916 125.911 79.5502 120.678C78.9087 115.445 74.9357 110.635 69.7822 109.524C64.6287 108.412 58.754 111.488 57.1888 116.523C56.3273 106.817 55.3346 96.7043 50.1744 88.4389C45.502 80.9549 37.4092 75.5997 28.6385 74.6417C19.8677 73.6836 10.6333 77.302 5.16331 84.2246C-0.306675 91.1473 -1.64598 101.211 2.18506 109.159C5.00724 115.014 10.2067 119.371 15.6545 122.916C33.0346 134.225 54.5948 138.942 75.1095 135.923" fill="#F2F2F2" />
                <path d="M13.8366 77.5026C21.0735 83.3972 27.7127 89.9898 33.6579 97.1851C39.6042 104.373 44.8392 112.121 49.2895 120.32C51.777 124.919 54.0115 129.65 55.9832 134.493C56.3852 135.478 54.7856 135.907 54.388 134.933C50.8957 126.395 46.575 118.22 41.4879 110.525C36.4256 102.858 30.6315 95.7005 24.1869 89.1523C20.5419 85.4505 16.6961 81.9519 12.6669 78.6723C11.841 77.9998 13.0175 76.8356 13.8366 77.5026L13.8366 77.5026Z" fill="white" />
                <path d="M164.38 136.61H68.3052V38.0351C68.3052 17.0624 85.3676 0 106.34 0H126.345C147.317 0 164.38 17.0624 164.38 38.0351V136.61Z" fill="#F2F2F2" />
                <path d="M144.375 136.61H68.3052V38.035C68.2842 29.9988 70.8289 22.1657 75.5689 15.6761C75.7436 15.438 75.9179 15.2029 76.0976 14.9704C78.3903 11.9634 81.1187 9.31521 84.1927 7.11319C84.3663 6.98685 84.5407 6.8627 84.7176 6.73854C87.2898 4.95851 90.0723 3.50336 93.0016 2.40623C93.1756 2.3403 93.3527 2.27424 93.5298 2.21087C96.1791 1.26541 98.9255 0.617774 101.718 0.279921C101.891 0.256271 102.069 0.237764 102.247 0.219257C104.968 -0.0717227 107.713 -0.0717227 110.434 0.219257C110.611 0.237764 110.789 0.256269 110.964 0.280174C113.756 0.618049 116.502 1.26561 119.151 2.21088C119.328 2.27425 119.505 2.34031 119.679 2.40637C122.573 3.48966 125.322 4.92309 127.867 6.67467C128.044 6.79613 128.221 6.92028 128.395 7.04444C130.118 8.27439 131.737 9.64463 133.234 11.1412C134.435 12.3416 135.554 13.6211 136.583 14.9712C136.763 15.2029 136.937 15.438 137.111 15.6758C141.851 22.1654 144.396 29.9987 144.375 38.035V136.61Z" fill="#CCCCCC" />
                <path d="M138.19 92.5213C140.516 92.5213 142.401 90.6357 142.401 88.3098C142.401 85.9838 140.516 84.0983 138.19 84.0983C135.864 84.0983 133.978 85.9838 133.978 88.3098C133.978 90.6357 135.864 92.5213 138.19 92.5213Z" fill="#9A19BA" />
                <path d="M156.509 133.658H153.282L151.747 121.211L156.51 121.211L156.509 133.658Z" fill="#946304" />
                <path d="M150.977 132.736H157.201V136.654H147.059C147.059 136.14 147.16 135.63 147.357 135.155C147.554 134.679 147.843 134.247 148.206 133.883C148.57 133.52 149.002 133.231 149.478 133.034C149.953 132.837 150.463 132.736 150.977 132.736Z" fill="#2F2E41" />
                <path d="M172.566 133.658H169.339L167.803 121.211L172.566 121.211L172.566 133.658Z" fill="#946304" />
                <path d="M167.034 132.736H173.257V136.654H163.115C163.115 136.14 163.216 135.63 163.413 135.155C163.61 134.679 163.899 134.247 164.263 133.883C164.627 133.52 165.059 133.231 165.534 133.034C166.009 132.837 166.519 132.736 167.034 132.736Z" fill="#2F2E41" />
                <path d="M140.321 89.1441C140.089 88.802 139.935 88.4132 139.869 88.0051C139.803 87.597 139.828 87.1794 139.941 86.7818C140.054 86.3842 140.253 86.0163 140.524 85.7039C140.795 85.3916 141.131 85.1424 141.508 84.9739L152.478 54.7389L157.876 57.6847L145.351 86.5783C145.592 87.2313 145.585 87.9499 145.331 88.5981C145.078 89.2463 144.596 89.779 143.976 90.0953C143.356 90.4115 142.641 90.4894 141.968 90.3141C141.294 90.1388 140.708 89.7225 140.321 89.1441Z" fill="#946304" />
                <path d="M170.917 94.8254C170.559 94.6197 170.249 94.338 170.012 94C169.774 93.6619 169.613 93.2758 169.54 92.8689C169.467 92.4619 169.485 92.044 169.591 91.6445C169.698 91.2451 169.89 90.8738 170.156 90.5568L166.757 58.5733L172.9 58.854L174.313 90.314C174.816 90.7951 175.125 91.444 175.181 92.1377C175.237 92.8314 175.037 93.5217 174.619 94.0778C174.2 94.6339 173.592 95.0171 172.91 95.1549C172.228 95.2927 171.519 95.1754 170.917 94.8254Z" fill="#946304" />
                <path d="M161.117 49.1386C164.688 49.1386 167.582 46.2441 167.582 42.6736C167.582 39.1032 164.688 36.2087 161.117 36.2087C157.547 36.2087 154.653 39.1032 154.653 42.6736C154.653 46.2441 157.547 49.1386 161.117 49.1386Z" fill="#946304" />
                <path d="M170.876 87.5514H151.385L151.409 87.3997C151.444 87.173 154.883 64.6474 152.346 57.278C152.092 56.5539 152.114 55.7611 152.409 55.0524C152.704 54.3437 153.251 53.7692 153.944 53.4394H153.944C157.569 51.7323 164.527 49.6303 170.401 54.7316C171.265 55.4946 171.94 56.4482 172.372 57.5171C172.804 58.5859 172.981 59.7406 172.89 60.8898L170.876 87.5514Z" fill="#9A19BA" />
                <path d="M155.129 67.9763L146.354 66.1961L150.467 56.4491C150.713 55.5051 151.324 54.6972 152.165 54.2027C153.006 53.7082 154.009 53.5675 154.953 53.8113C155.898 54.0552 156.707 54.6638 157.204 55.5036C157.7 56.3434 157.844 57.3458 157.602 58.291L155.129 67.9763Z" fill="#9A19BA" />
                <path d="M166.367 71.2817L165.84 59.189C165.44 56.9158 166.741 54.7669 168.742 54.4156C170.744 54.0657 172.699 55.6423 173.101 57.9322L175.084 69.2316L166.367 71.2817Z" fill="#9A19BA" />
                <path d="M170.228 86.1036C173.364 98.0476 173.706 113.233 172.86 129.798L168.648 129.271L161.015 97.6852L156.803 129.798L152.066 129.535C150.65 112.154 149.272 97.2338 151.539 87.4197L170.228 86.1036Z" fill="#2F2E41" />
                <path d="M165.377 47.6699C164.171 48.9546 161.931 48.2649 161.774 46.5098C161.762 46.3736 161.763 46.2365 161.777 46.1004C161.858 45.3229 162.307 44.6171 162.2 43.7963C162.175 43.592 162.099 43.3973 161.978 43.2306C161.017 41.9437 158.761 43.8062 157.854 42.6412C157.298 41.9268 157.952 40.8021 157.525 40.0036C156.962 38.9498 155.293 39.4696 154.247 38.8925C153.083 38.2504 153.152 36.4643 153.919 35.3779C154.853 34.0529 156.492 33.3459 158.11 33.244C159.728 33.1422 161.335 33.5796 162.846 34.1683C164.563 34.8372 166.265 35.7617 167.321 37.271C168.605 39.1065 168.729 41.5741 168.087 43.7203C167.696 45.0259 166.362 46.6208 165.377 47.6699Z" fill="#2F2E41" />
                <path d="M221.099 136.78H26.766C26.683 136.779 26.6035 136.746 26.545 136.688C26.4864 136.629 26.4535 136.549 26.4535 136.466C26.4535 136.383 26.4864 136.304 26.545 136.245C26.6035 136.186 26.683 136.153 26.766 136.153H221.099C221.182 136.153 221.261 136.186 221.32 136.245C221.378 136.304 221.411 136.383 221.411 136.466C221.411 136.549 221.378 136.629 221.32 136.688C221.261 136.746 221.182 136.779 221.099 136.78Z" fill="#3F3D56" />
                <path d="M123.449 108.051H89.2311C88.7804 108.054 88.3472 107.877 88.0265 107.561C87.7057 107.244 87.5236 106.813 87.5201 106.363V29.9846C87.5236 29.534 87.7057 29.1031 88.0265 28.7865C88.3472 28.47 88.7804 28.2935 89.2311 28.296H123.449C123.9 28.2935 124.333 28.47 124.654 28.7865C124.975 29.1031 125.157 29.534 125.16 29.9846V106.363C125.157 106.813 124.975 107.244 124.654 107.561C124.333 107.877 123.9 108.054 123.449 108.051Z" fill="white" />
                <path d="M125.16 53.0095H87.5201V53.5359H125.16V53.0095Z" fill="#CCCCCC" />
                <path d="M125.292 83.0454H87.6517V83.5719H125.292V83.0454Z" fill="#CCCCCC" />
                <path d="M99.8914 28.296H99.365V108.314H99.8914V28.296Z" fill="#CCCCCC" />
                <path d="M113.052 28.296H112.526V108.314H113.052V28.296Z" fill="#CCCCCC" />
            </svg>
        </figure>

        <form action="" method="POST">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required aria-required="true" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required aria-required="true" />
            <Link to="/reset-password" className="light-link">Forgot Password?</Link>
            <Button text="Sign In" type="submit" />
            <p>Don't have an account?<Link to="/signup" className="bold-link"> Sign Up</Link></p>
        </form>
    </main>
)

export default Login;