import { G, Line, Path, Polyline, Svg, } from "react-native-svg";

function Icons({ icon, color, width }) {
    switch (icon) {
        case "home":
            return (

                <Svg width={width} height={width} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
                    <Path opacity="0.1" d="M17.7218 7.81307L14.7218 5.02736C13.4309 3.82862 12.7854 3.22925 12 3.22925C11.2146 3.22925 10.5691 3.82862 9.2782 5.02736L6.2782 7.81307C5.64836 8.39791 5.33345 8.69034 5.16672 9.07267C5 9.455 5 9.88475 5 10.7442V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H9.75V17C9.75 15.7573 10.7574 14.75 12 14.75C13.2426 14.75 14.25 15.7573 14.25 17V21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17L19 10.7442C19 9.88475 19 9.455 18.8333 9.07267C18.6666 8.69034 18.3516 8.39791 17.7218 7.81307Z" fill={color} />
                    <Path d="M17.7218 7.8131C18.3516 8.39795 18.6666 8.69037 18.8333 9.0727C19 9.45504 19 9.88478 19 10.7443L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L14 21L10 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 10.7443C5 9.88478 5 9.45503 5.16672 9.0727C5.33345 8.69037 5.64836 8.39795 6.2782 7.8131L8.5 5.75L9.2782 5.02739C10.5691 3.82865 11.2146 3.22928 12 3.22928C12.7854 3.22928 13.4309 3.82865 14.7218 5.02739L15.5 5.75L17.7218 7.8131Z" stroke="#323232" stroke-width="2" stroke-linejoin="round" />
                    <Path d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </Svg>
            );
        case "utilities":
            return (
                <Svg fill={color} width={width} height={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12zM13 4l5 5h-5V4zM7 8h3v2H7V8zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" /></Svg>
            );
        case "shopping":
            return (
                <Svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M4.46785 10.2658C4.47574 10.3372 4.48376 10.4094 4.49187 10.4823L4.61751 11.6131C4.7057 12.4072 4.78218 13.0959 4.91562 13.6455C5.05917 14.2367 5.29582 14.7937 5.78931 15.2354C6.28281 15.6771 6.86251 15.8508 7.46598 15.9281C8.02694 16.0001 8.71985 16 9.51887 16H14.8723C15.4201 16 15.9036 16 16.3073 15.959C16.7448 15.9146 17.1698 15.8162 17.5785 15.5701C17.9872 15.324 18.2731 14.9944 18.5171 14.6286C18.7422 14.291 18.9684 13.8637 19.2246 13.3797L21.7141 8.67734C22.5974 7.00887 21.3879 4.99998 19.5 4.99998L9.39884 4.99998C8.41604 4.99993 7.57525 4.99988 6.90973 5.09287C6.5729 5.13994 6.24284 5.21529 5.93326 5.34375L5.78941 4.04912C5.65979 2.88255 4.67375 2 3.5 2H3C2.44772 2 2 2.44771 2 3C2 3.55228 2.44772 4 3 4H3.5C3.65465 4 3.78456 4.11628 3.80164 4.26998L4.46785 10.2658Z" fill={color} />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M14 19.5C14 18.1193 15.1193 17 16.5 17C17.8807 17 19 18.1193 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5Z" fill={color} />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M5 19.5C5 18.1193 6.11929 17 7.5 17C8.88071 17 10 18.1193 10 19.5C10 20.8807 8.88071 22 7.5 22C6.11929 22 5 20.8807 5 19.5Z" fill={color} />
                </Svg>
            );
        case "transportation":
            return (
                <Svg width={width} height={width} viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><Path d="M746.666667 512H533.333333a21.290667 21.290667 0 0 1-17.344-8.938667l-213.333333-298.666666A21.333333 21.333333 0 0 1 320 170.666667h85.333333c5.162667 0 10.176 1.877333 14.037334 5.290666l341.333333 298.666667A21.333333 21.333333 0 0 1 746.666667 512z" fill={color} /><Path d="M405.333333 938.666667h-85.333333a21.333333 21.333333 0 0 1-17.749333-33.173334l213.333333-320A21.333333 21.333333 0 0 1 533.333333 576h234.666667a21.354667 21.354667 0 0 1 14.101333 37.333333l-362.666666 320A21.333333 21.333333 0 0 1 405.333333 938.666667z" fill={color} /><Path d="M832 405.333333H234.56c-11.733333 0-26.666667-7.616-33.664-17.429333l-81.792-114.474667C112.234667 263.808 97.216 256 85.141333 256H42.858667c-11.882667 0-18.688 9.237333-15.253334 20.394667l72.789334 236.544c3.456 11.264 15.168 23.957333 25.962666 28.266666l173.952 69.589334c10.88 4.352 29.290667 7.872 40.96 7.872H832c85.333333 0 170.666667-53.333333 170.666667-106.666667s-85.333333-106.666667-170.666667-106.666667z" fill={color} /><Path d="M394.666667 501.333333m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#5B5B5B" /><Path d="M565.333333 501.333333m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#5B5B5B" /><Path d="M736 501.333333m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#5B5B5B" /></Svg>
            );
        case "healtcare":
            return (
                <Svg fill={color} width={width} height={width} viewBox="-2.5 0 19 19" xmlns="http://www.w3.org/2000/Svg" class="cf-icon-Svg"><Path d="M11.56 10.11v2.046a3.827 3.827 0 1 1-7.655 0v-.45A3.61 3.61 0 0 1 .851 8.141V5.25a1.682 1.682 0 0 1 .763-1.408 1.207 1.207 0 1 1 .48 1.04.571.571 0 0 0-.135.368v2.89a2.5 2.5 0 0 0 5 0V5.25a.57.57 0 0 0-.108-.334 1.208 1.208 0 1 1 .533-1.018 1.681 1.681 0 0 1 .683 1.352v2.89a3.61 3.61 0 0 1-3.054 3.565v.45a2.719 2.719 0 0 0 5.438 0V10.11a2.144 2.144 0 1 1 1.108 0zm.48-2.07a1.035 1.035 0 1 0-1.035 1.035 1.037 1.037 0 0 0 1.036-1.035z" /></Svg>
            );
        case "education":
            return (
                <Svg fill={color} width={width} height={width} viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><Path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" /></Svg>
            );
        case "entertainment":
            return (
                <Svg width={width} height={width} fill={color} viewBox="0 0 30 30" id="Layer_1" version="1.1" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><Path class="st5" d="M28.8,12.9L27,20.2c-0.5,2.3-2.2,4.1-4.4,4.9l-4.3,1.6c-0.4,0.1-0.8,0-1.1-0.3l-3.1-3.4  c-1.6-1.7-2.2-4.1-1.7-6.4l1.7-7.3c0.1-0.4,0.5-0.8,1-0.8c4.6,0,9,1.1,13.1,3.1C28.7,12,28.9,12.5,28.8,12.9z M16.3,17.8  c-0.5,1.9,0.7,3.8,2.6,4.2c1.9,0.5,3.8-0.7,4.2-2.6 M24.3,14.6c-0.8-0.2-1.6,0.3-1.8,1.1c-0.2,0.8,0.3,1.6,1.1,1.8  c0.8,0.2,1.6-0.3,1.8-1.1C25.6,15.6,25.1,14.8,24.3,14.6z M17.5,13c-0.8-0.2-1.6,0.3-1.8,1.1c-0.2,0.8,0.3,1.6,1.1,1.8  c0.8,0.2,1.6-0.3,1.8-1.1C18.8,14,18.3,13.2,17.5,13z M11,21.9l-2.1-0.5c-2.3-0.6-4.1-2.3-4.9-4.5l-2.8-8c-0.2-0.4,0-0.9,0.4-1.2  c3.9-2.5,8.1-4,12.7-4.4c0.5,0,0.9,0.2,1,0.7l1,2.8c-0.4,0-0.8,0-1.2,0c-1.4,0-2.6,0.9-2.9,2.3l-1.1,4.7c-0.1,0-0.2,0-0.3,0.1  c-1.8,0.6-2.8,2.6-2.1,4.5l1.6-0.6C10.2,19.1,10.4,20.5,11,21.9z M8.2,12c-0.3-0.8-1.1-1.2-1.9-0.9C5.5,11.3,5,12.2,5.3,13  c0.3,0.8,1.1,1.2,1.9,0.9S8.4,12.8,8.2,12z" /></Svg>
            );
        case "clothing":
            return (
                <Svg fill={color} width={width} height={width} viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><Path d="M47.36 14.75c.08.29-.021.61-.19.86l-5.39 8.02c-.2.31-.62.48-.971.48-.1 0-.38-.02-.489-.05l-4.32-1.06v19c0 .58-.41 1-1 1h-21c-.59 0-1-.42-1-1v-19l-3.88 1.07c-.45.14-.84-.04-1.09-.43l-5.35-8c-.17-.26-.22-.55-.14-.84.07-.3.28-.5.55-.64l10.91-5.16h5c.59 0 1 .41 1 1 0 2.06 2.89 3.52 4.95 3.52s5.05-1.45 5.05-3.52c0-.58.41-1 1-1h5l10.8 5.06c.28.14.48.39.56.69z" /></Svg>
            );
        case "insurance":
            return (
                <Svg width={width} height={width} viewBox="0 0 30 30" id="Layer_1" version="1.1" space="preserve" fill={color} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><Path class="st2" d="M24.1,4.9C21,4.7,18,4,15,3c-2.9,1-5.9,1.7-9.1,1.9C5.4,5,5,5.4,5,5.9v11.1c0,3,1.7,5.8,4.4,7.2l5.1,2.6  c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0,0.4-0.1l5.1-2.6c2.7-1.4,4.4-4.1,4.4-7.2V5.9C25,5.4,24.6,5,24.1,4.9z M19.7,22.4L15,24.8V15  H7V6.9c2.7-0.3,5.4-0.9,8-1.7V15h8v2.1C23,19.3,21.7,21.4,19.7,22.4z" /></Svg>
            )
        case "personalCare":
            return (
                <Svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path opacity="0.9" d="M2 11.5C2 11.2239 2.22386 11 2.5 11H7.5C7.77614 11 8 11.2239 8 11.5V18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18V11.5Z" fill={color} />
                    <Path d="M3 11H7V5.99983C7 5.25644 6.21769 4.77295 5.55279 5.1054L3.55279 6.1054C3.214 6.27479 3 6.62105 3 6.99983V11Z" fill={color} />
                    <Path d="M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z" fill={color} />
                    <Path opacity="0.9" d="M15.75 15.9492V19.5001H13.5C13.0858 19.5001 12.75 19.8359 12.75 20.2501C12.75 20.6643 13.0858 21.0001 13.5 21.0001H19.5C19.9142 21.0001 20.25 20.6643 20.25 20.2501C20.25 19.8359 19.9142 19.5001 19.5 19.5001H17.25V15.9492C17.0048 15.9827 16.7544 15.9999 16.5 15.9999C16.2456 15.9999 15.9952 15.9827 15.75 15.9492Z" fill={color} />
                </Svg>
            )
        case "petCare":
            return (
                <Svg fill={color} width={width} height={width} viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><Path d="M4.086 7.9a1.91 1.91 0 0 1-.763 2.52c-.81.285-1.782-.384-2.17-1.492a1.91 1.91 0 0 1 .762-2.521c.81-.285 1.782.384 2.171 1.492zm6.521 7.878a2.683 2.683 0 0 1-1.903-.788.996.996 0 0 0-1.408 0 2.692 2.692 0 0 1-3.807-3.807 6.377 6.377 0 0 1 9.022 0 2.692 2.692 0 0 1-1.904 4.595zM7.73 6.057c.127 1.337-.563 2.496-1.54 2.588-.977.092-1.872-.917-1.998-2.254-.127-1.336.563-2.495 1.54-2.587.977-.093 1.871.916 1.998 2.253zm.54 0c-.127 1.337.563 2.496 1.54 2.588.977.092 1.871-.917 1.998-2.254.127-1.336-.563-2.495-1.54-2.587-.977-.093-1.872.916-1.998 2.253zm3.644 1.842a1.91 1.91 0 0 0 .763 2.522c.81.284 1.782-.385 2.17-1.493a1.91 1.91 0 0 0-.762-2.521c-.81-.285-1.782.384-2.171 1.492z" /></Svg>
            )
        case "taxes":
            return (
                <Svg fill={color} width={width} height={width} viewBox="0 0 24 24" id="tax" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><Path id="primary" d="M17,13A6,6,0,0,1,13.69,2H4A2,2,0,0,0,2,4V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V12.65A6,6,0,0,1,17,13Z" fill={color}></Path><Path id="secondary" d="M14,18H6a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Zm-4-4H6a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Zm5-3a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l6-6a1,1,0,1,1,1.42,1.42l-6,6A1,1,0,0,1,15,11Zm5.5-3A1.5,1.5,0,1,0,22,9.5,1.5,1.5,0,0,0,20.5,8Zm-5-5A1.5,1.5,0,1,0,17,4.5,1.5,1.5,0,0,0,15.5,3Z" fill={color}></Path></Svg>
            )
        case "other":
            return (
                <Svg fill={color} width={width} height={width} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><Path d="M244 416q-35 0-59.5 24.5T160 500t24.5 59.5T244 584t59.5-24.5T328 500t-24.5-59.5T244 416zm256 0q-35 0-59.5 24.5T416 500t24.5 59.5 59 24.5 59.5-24.5 25-59.5-25-59.5-60-24.5h1zm256 0q-35 0-59.5 24.5T672 500t24.5 59.5T756 584t59.5-24.5T840 500t-24.5-59.5T756 416z" /></Svg>
            )
        case "list":
            return (
                <Svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill={color} />
                    <Path d="M10.5431 7.51724C10.8288 7.2173 10.8172 6.74256 10.5172 6.4569C10.2173 6.17123 9.74256 6.18281 9.4569 6.48276L7.14286 8.9125L6.5431 8.28276C6.25744 7.98281 5.78271 7.97123 5.48276 8.2569C5.18281 8.54256 5.17123 9.01729 5.4569 9.31724L6.59976 10.5172C6.74131 10.6659 6.9376 10.75 7.14286 10.75C7.34812 10.75 7.5444 10.6659 7.68596 10.5172L10.5431 7.51724Z" fill={"white"} />
                    <Path d="M13 8.25C12.5858 8.25 12.25 8.58579 12.25 9C12.25 9.41422 12.5858 9.75 13 9.75H18C18.4142 9.75 18.75 9.41422 18.75 9C18.75 8.58579 18.4142 8.25 18 8.25H13Z" fill={"white"} />
                    <Path d="M10.5431 14.5172C10.8288 14.2173 10.8172 13.7426 10.5172 13.4569C10.2173 13.1712 9.74256 13.1828 9.4569 13.4828L7.14286 15.9125L6.5431 15.2828C6.25744 14.9828 5.78271 14.9712 5.48276 15.2569C5.18281 15.5426 5.17123 16.0173 5.4569 16.3172L6.59976 17.5172C6.74131 17.6659 6.9376 17.75 7.14286 17.75C7.34812 17.75 7.5444 17.6659 7.68596 17.5172L10.5431 14.5172Z" fill={"white"} />
                    <Path d="M13 15.25C12.5858 15.25 12.25 15.5858 12.25 16C12.25 16.4142 12.5858 16.75 13 16.75H18C18.4142 16.75 18.75 16.4142 18.75 16C18.75 15.5858 18.4142 15.25 18 15.25H13Z" fill={"white"} />
                </Svg>
            )
        case "calendar":
            return (
                <Svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M6.94028 2C7.35614 2 7.69326 2.32421 7.69326 2.72414V4.18487C8.36117 4.17241 9.10983 4.17241 9.95219 4.17241H13.9681C14.8104 4.17241 15.5591 4.17241 16.227 4.18487V2.72414C16.227 2.32421 16.5641 2 16.98 2C17.3958 2 17.733 2.32421 17.733 2.72414V4.24894C19.178 4.36022 20.1267 4.63333 20.8236 5.30359C21.5206 5.97385 21.8046 6.88616 21.9203 8.27586L22 9H2.92456H2V8.27586C2.11571 6.88616 2.3997 5.97385 3.09665 5.30359C3.79361 4.63333 4.74226 4.36022 6.1873 4.24894V2.72414C6.1873 2.32421 6.52442 2 6.94028 2Z" fill={"black"} />
                    <Path opacity="0.7" d="M21.9995 14.0001V12.0001C21.9995 11.161 21.9963 9.66527 21.9834 9H2.00917C1.99626 9.66527 1.99953 11.161 1.99953 12.0001V14.0001C1.99953 17.7713 1.99953 19.6569 3.1711 20.8285C4.34267 22.0001 6.22829 22.0001 9.99953 22.0001H13.9995C17.7708 22.0001 19.6564 22.0001 20.828 20.8285C21.9995 19.6569 21.9995 17.7713 21.9995 14.0001Z" fill={color} />
                    <Path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z" fill="#FFFFFF" />
                    <Path d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z" fill="#FFFFFF" />
                    <Path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="#FFFFFF" />
                    <Path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" fill="#FFFFFF" />
                    <Path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" fill="#FFFFFF" />
                    <Path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill="#FFFFFF" />
                </Svg>
            )
        case "note":
            return (
                <Svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#292D32" />
                    <Path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#292D32" />
                    <Path opacity="0.4" d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" fill={color} />
                    <Path d="M16 11.75H8C7.59 11.75 7.25 11.41 7.25 11C7.25 10.59 7.59 10.25 8 10.25H16C16.41 10.25 16.75 10.59 16.75 11C16.75 11.41 16.41 11.75 16 11.75Z" fill="#292D32" />
                    <Path d="M12 16.75H8C7.59 16.75 7.25 16.41 7.25 16C7.25 15.59 7.59 15.25 8 15.25H12C12.41 15.25 12.75 15.59 12.75 16C12.75 16.41 12.41 16.75 12 16.75Z" fill="#292D32" />
                </Svg>
            )
        case "arrow":
            return (
                <Svg width={width} height={width} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4L12.75 18.1893L17.4697 13.4697C17.7626 13.1768 18.2374 13.1768 18.5303 13.4697C18.8232 13.7626 18.8232 14.2374 18.5303 14.5303L12.5303 20.5303C12.3897 20.671 12.1989 20.75 12 20.75C11.8011 20.75 11.6103 20.671 11.4697 20.5303L5.46967 14.5303C5.17678 14.2374 5.17678 13.7626 5.46967 13.4697C5.76256 13.1768 6.23744 13.1768 6.53033 13.4697L11.25 18.1893L11.25 4C11.25 3.58579 11.5858 3.25 12 3.25Z" fill={color} />
                </Svg>
            )
        case "menu":
            return (
                <Svg width={width} height={width} viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <G id="Dribbble-Light-Preview" transform="translate(-99.000000, -200.000000)" fill={color}>
                            <G id="icons" transform="translate(56.000000, 160.000000)">
                                <Path d="M60.85,51 L57.7,51 C55.96015,51 54.55,52.343 54.55,54 L54.55,57 C54.55,58.657 55.96015,60 57.7,60 L60.85,60 C62.58985,60 64,58.657 64,57 L64,54 C64,52.343 62.58985,51 60.85,51 M49.3,51 L46.15,51 C44.41015,51 43,52.343 43,54 L43,57 C43,58.657 44.41015,60 46.15,60 L49.3,60 C51.03985,60 52.45,58.657 52.45,57 L52.45,54 C52.45,52.343 51.03985,51 49.3,51 M60.85,40 L57.7,40 C55.96015,40 54.55,41.343 54.55,43 L54.55,46 C54.55,47.657 55.96015,49 57.7,49 L60.85,49 C62.58985,49 64,47.657 64,46 L64,43 C64,41.343 62.58985,40 60.85,40 M52.45,43 L52.45,46 C52.45,47.657 51.03985,49 49.3,49 L46.15,49 C44.41015,49 43,47.657 43,46 L43,43 C43,41.343 44.41015,40 46.15,40 L49.3,40 C51.03985,40 52.45,41.343 52.45,43" id="menu_navigation_grid-[#1529]">

                                </Path>
                            </G>
                        </G>
                    </G>
                </Svg>
            )
        case "plus":
            return (
                <Svg width={width} height={width} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" sketch="http://www.bohemiancoding.com/sketch/ns">

                    <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" type="MSPage">
                        <G id="Icon-Set-Filled" type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill={color}>
                            <Path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" type="MSShapeGroup">

                            </Path>
                        </G>
                    </G>
                </Svg>
            )

        default:
            return "";
    }
}

export default Icons;