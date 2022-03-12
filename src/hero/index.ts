import { SceneController } from "../scene-controller";

const svgPath = `M7.975 38.735L7.56661 39.6479L7.57672 39.6523L7.975 38.735ZM0.605 33.4L-0.115572 32.7066L-0.768204 33.3848L-0.130698 34.0773L0.605 33.4ZM3.41 30.485L4.14189 29.8036L3.42198 29.0303L2.68943 29.7916L3.41 30.485ZM9.735 35.27L9.30563 36.1732L9.31131 36.1758L9.735 35.27ZM22.22 35.93L22.5952 36.857L22.6061 36.8524L22.22 35.93ZM25.905 33.235L26.6957 33.8472L26.7004 33.8411L26.705 33.835L25.905 33.235ZM25.135 24.71L24.5181 25.4971L24.5283 25.5049L25.135 24.71ZM18.37 22.345L18.5307 21.358L18.5265 21.3573L18.37 22.345ZM12.815 21.465L12.649 22.4512L12.6585 22.4527L12.815 21.465ZM4.62 18.165L5.28725 17.4202L5.28725 17.4202L4.62 18.165ZM3.685 6.12L2.86752 5.54404L2.86752 5.54404L3.685 6.12ZM8.415 2.38L8.81496 3.29657L8.82265 3.29314L8.415 2.38ZM23.485 2.325L23.1648 3.27235L23.1688 3.27368L23.485 2.325ZM30.69 6.12L31.4964 6.71136L32.0767 5.92001L31.2965 5.32487L30.69 6.12ZM28.27 9.42L27.6667 10.2175L28.4762 10.8299L29.0764 10.0114L28.27 9.42ZM10.505 5.515L10.8722 6.44515L10.8827 6.44101L10.8931 6.43663L10.505 5.515ZM7.26 7.88L8.04935 8.49394L8.05474 8.48701L8.06 8.48L7.26 7.88ZM7.92 15.525L8.53887 14.7395L8.53887 14.7395L7.92 15.525ZM13.915 17.615L14.073 16.6276L14.071 16.6272L13.915 17.615ZM19.415 18.495L19.578 17.5084L19.573 17.5076L19.415 18.495ZM28.6 22.07L27.9374 22.819L27.9456 22.8262L28.6 22.07ZM29.59 35.05L30.4003 35.6361L30.406 35.628L29.59 35.05ZM24.365 39.12L24.7626 40.0376L24.7697 40.0344L24.365 39.12ZM16.72 39.55C13.8134 39.55 11.034 38.9731 8.37329 37.8177L7.57672 39.6523C10.4893 40.9169 13.5399 41.55 16.72 41.55V39.55ZM8.38337 37.8222C5.72424 36.6326 3.37807 34.9357 1.3407 32.7227L-0.130698 34.0773C2.08527 36.4843 4.65243 38.3441 7.56663 39.6478L8.38337 37.8222ZM1.32557 34.0934L4.13057 31.1784L2.68943 29.7916L-0.115572 32.7066L1.32557 34.0934ZM2.67811 31.1664C4.72942 33.3697 6.93713 35.0471 9.30564 36.1731L10.1644 34.3669C8.05954 33.3662 6.05058 31.8536 4.14189 29.8036L2.67811 31.1664ZM9.31131 36.1758C11.7164 37.3008 14.2443 37.865 16.885 37.865V35.865C14.5391 35.865 12.3003 35.3659 10.1587 34.3642L9.31131 36.1758ZM16.885 37.865C19.0035 37.865 20.9135 37.5377 22.5952 36.8569L21.8448 35.0031C20.4465 35.569 18.7998 35.865 16.885 35.865V37.865ZM22.6061 36.8524C24.312 36.1384 25.6916 35.1442 26.6957 33.8472L25.1143 32.6228C24.3584 33.5991 23.2813 34.4016 21.8339 35.0076L22.6061 36.8524ZM26.705 33.835C27.7148 32.4886 28.225 30.958 28.225 29.275H26.225C26.225 30.5253 25.8552 31.6348 25.105 32.635L26.705 33.835ZM28.225 29.275C28.225 27.0293 27.4174 25.1939 25.7417 23.915L24.5283 25.5049C25.6393 26.3528 26.225 27.5607 26.225 29.275H28.225ZM25.7519 23.9229C24.1918 22.7001 21.7307 21.8789 18.5307 21.358L18.2093 23.332C21.3159 23.8377 23.3649 24.5932 24.5181 25.4971L25.7519 23.9229ZM18.5265 21.3573L12.9715 20.4773L12.6585 22.4527L18.2135 23.3327L18.5265 21.3573ZM12.981 20.4789C9.36394 19.8701 6.84608 18.8166 5.28725 17.4202L3.95275 18.9098C5.91392 20.6667 8.85939 21.8133 12.649 22.4511L12.981 20.4789ZM5.28725 17.4202C3.77137 16.0622 2.98 14.2056 2.98 11.73H0.98C0.98 14.6811 1.94863 17.1145 3.95275 18.9098L5.28725 17.4202ZM2.98 11.73C2.98 9.79268 3.49394 8.12743 4.50248 6.69595L2.86752 5.54404C1.60273 7.33923 0.98 9.41398 0.98 11.73H2.98ZM4.50248 6.69595C5.52196 5.24895 6.94619 4.112 8.81494 3.29654L8.01506 1.46346C5.85048 2.408 4.12137 3.76438 2.86752 5.54404L4.50248 6.69595ZM8.82265 3.29314C10.7257 2.44358 12.9475 2.005 15.51 2.005V0.00499719C12.7192 0.00499719 10.211 0.483086 8.00735 1.46686L8.82265 3.29314ZM15.51 2.005C18.113 2.005 20.6633 2.42676 23.1648 3.27234L23.8052 1.37766C21.1001 0.463238 18.3336 0.00499719 15.51 0.00499719V2.005ZM23.1688 3.27368C25.7067 4.11964 28.0098 5.33348 30.0836 6.91512L31.2965 5.32487C29.0435 3.60652 26.5433 2.29036 23.8012 1.37631L23.1688 3.27368ZM29.8836 5.52863L27.4636 8.82863L29.0764 10.0114L31.4964 6.71136L29.8836 5.52863ZM28.8733 8.6225C24.519 5.32837 20.004 3.635 15.345 3.635V5.635C19.486 5.635 23.5877 7.13163 27.6667 10.2175L28.8733 8.6225ZM15.345 3.635C13.4061 3.635 11.6563 3.94522 10.1169 4.59336L10.8931 6.43663C12.1404 5.91144 13.6173 5.635 15.345 5.635V3.635ZM10.1378 4.58484C8.60168 5.19122 7.35841 6.08211 6.46 7.28L8.06 8.48C8.70159 7.62455 9.62165 6.93878 10.8722 6.44515L10.1378 4.58484ZM6.47065 7.26606C5.5527 8.44628 5.105 9.84031 5.105 11.4H7.105C7.105 10.2464 7.4273 9.29372 8.04935 8.49394L6.47065 7.26606ZM5.105 11.4C5.105 13.4458 5.80878 15.1347 7.30113 16.3105L8.53887 14.7395C7.61122 14.0086 7.105 12.9476 7.105 11.4H5.105ZM7.30113 16.3105C8.71618 17.4254 10.9226 18.1549 13.759 18.6028L14.071 16.6272C11.3341 16.1951 9.54382 15.5313 8.53887 14.7395L7.30113 16.3105ZM13.757 18.6024L19.257 19.4824L19.573 17.5076L14.073 16.6276L13.757 18.6024ZM19.252 19.4816C23.3953 20.1662 26.2377 21.3154 27.9374 22.819L29.2626 21.321C27.149 19.4513 23.868 18.2172 19.578 17.5084L19.252 19.4816ZM27.9456 22.8262C29.5903 24.2495 30.46 26.2773 30.46 29.055H32.46C32.46 25.8194 31.423 23.1905 29.2544 21.3138L27.9456 22.8262ZM30.46 29.055C30.46 31.0928 29.8963 32.8875 28.774 34.472L30.406 35.628C31.777 33.6925 32.46 31.4906 32.46 29.055H30.46ZM28.7798 34.4639C27.6516 36.0235 26.0597 37.2763 23.9603 38.2056L24.7697 40.0344C27.1436 38.9837 29.0351 37.5232 30.4002 35.6361L28.7798 34.4639ZM23.9674 38.2024C21.9162 39.0913 19.5077 39.55 16.72 39.55V41.55C19.7256 41.55 22.4138 41.0554 24.7626 40.0376L23.9674 38.2024ZM37.2135 40H36.2135V41H37.2135V40ZM37.2135 1.5V0.499997H36.2135V1.5H37.2135ZM41.4485 1.5H42.4485V0.499997H41.4485V1.5ZM41.4485 40V41H42.4485V40H41.4485ZM38.2135 40V1.5H36.2135V40H38.2135ZM37.2135 2.5H41.4485V0.499997H37.2135V2.5ZM40.4485 1.5V40H42.4485V1.5H40.4485ZM41.4485 39H37.2135V41H41.4485V39ZM49.943 40H48.943V41H49.943V40ZM49.943 1.5V0.499997H48.943V1.5H49.943ZM55.883 1.5L56.7842 1.06662L56.5117 0.499997H55.883V1.5ZM69.028 28.835L68.1268 29.2684L69.0299 31.1464L69.9299 29.2669L69.028 28.835ZM82.118 1.5V0.499997H81.4881L81.2161 1.06809L82.118 1.5ZM88.058 1.5H89.058V0.499997H88.058V1.5ZM88.058 40V41H89.058V40H88.058ZM84.043 40H83.043V41H84.043V40ZM84.043 6.34H85.043L83.1441 5.90176L84.043 6.34ZM68.973 37.25L68.0745 37.6889L68.9738 39.5302L69.8719 37.6882L68.973 37.25ZM53.903 6.395L54.8016 5.95613L52.903 6.395H53.903ZM53.903 40V41H54.903V40H53.903ZM50.943 40V1.5H48.943V40H50.943ZM49.943 2.5H55.883V0.499997H49.943V2.5ZM54.9818 1.93338L68.1268 29.2684L69.9292 28.4016L56.7842 1.06662L54.9818 1.93338ZM69.9299 29.2669L83.0199 1.9319L81.2161 1.06809L68.1261 28.4031L69.9299 29.2669ZM82.118 2.5H88.058V0.499997H82.118V2.5ZM87.058 1.5V40H89.058V1.5H87.058ZM88.058 39H84.043V41H88.058V39ZM85.043 40V6.34H83.043V40H85.043ZM83.1441 5.90176L68.0741 36.8118L69.8719 37.6882L84.9419 6.77823L83.1441 5.90176ZM69.8716 36.8111L54.8016 5.95613L53.0045 6.83387L68.0745 37.6889L69.8716 36.8111ZM52.903 6.395V40H54.903V6.395H52.903ZM53.903 39H49.943V41H53.903V39ZM106.74 39.12L106.345 40.0384L106.353 40.0421L106.362 40.0455L106.74 39.12ZM100.415 34.885L99.7012 35.5849L99.7082 35.5921L99.7155 35.5992L100.415 34.885ZM96.1804 28.56L95.2548 28.9386L95.2583 28.9472L95.262 28.9556L96.1804 28.56ZM96.1804 12.995L95.2598 12.6044L95.2569 12.6114L96.1804 12.995ZM100.415 6.67L101.122 7.37711L101.122 7.37711L100.415 6.67ZM106.74 2.435L107.124 3.35852L107.131 3.35558L106.74 2.435ZM122.25 2.435L121.855 3.35341L121.863 3.35706L121.872 3.36055L122.25 2.435ZM128.575 6.67L127.861 7.36993L127.868 7.37714L127.875 7.38421L128.575 6.67ZM132.81 12.995L131.885 13.3736L131.888 13.3822L131.892 13.3906L132.81 12.995ZM132.81 28.56L131.89 28.1694L131.887 28.1764L132.81 28.56ZM128.575 34.885L129.282 35.5921L129.282 35.5921L128.575 34.885ZM122.25 39.12L122.634 40.0435L122.641 40.0406L122.25 39.12ZM120.655 35.49L120.259 34.5718L120.655 35.49ZM125.55 32.135L124.834 31.4369L124.834 31.4371L125.55 32.135ZM128.85 27.02L127.927 26.6366L127.924 26.6441L127.921 26.6516L128.85 27.02ZM128.85 14.48L127.921 14.8484L127.925 14.8591L127.929 14.8696L128.85 14.48ZM125.55 9.42L124.825 10.1087L124.834 10.118L124.843 10.1271L125.55 9.42ZM120.655 6.01L120.259 6.92821L120.655 6.01ZM108.39 6.01L108.001 5.08901L107.994 5.09179L108.39 6.01ZM103.44 9.42L102.724 8.7219L102.724 8.72213L103.44 9.42ZM100.14 14.48L99.2168 14.0966L99.2131 14.1055L100.14 14.48ZM100.14 27.02L99.2107 27.3884L99.2137 27.3959L99.2168 27.4034L100.14 27.02ZM103.44 32.135L102.715 32.8237L102.724 32.833L102.733 32.8421L103.44 32.135ZM108.39 35.49L107.994 36.4082L108.001 36.411L108.39 35.49ZM114.55 39.605C111.885 39.605 109.411 39.1321 107.119 38.1945L106.362 40.0455C108.91 41.0879 111.643 41.605 114.55 41.605V39.605ZM107.136 38.2016C104.865 37.2231 102.86 35.8803 101.115 34.1708L99.7155 35.5992C101.638 37.4831 103.85 38.9636 106.345 40.0384L107.136 38.2016ZM101.13 34.1851C99.4201 32.4407 98.0773 30.4358 97.0988 28.1644L95.262 28.9556C96.3368 31.4508 97.8173 33.6626 99.7012 35.5849L101.13 34.1851ZM97.1059 28.1814C96.1683 25.8893 95.6954 23.4155 95.6954 20.75H93.6954C93.6954 23.6579 94.2125 26.3907 95.2548 28.9386L97.1059 28.1814ZM95.6954 20.75C95.6954 18.0844 96.1683 15.6309 97.1039 13.3786L95.2569 12.6114C94.2125 15.1257 93.6954 17.8423 93.6954 20.75H95.6954ZM97.101 13.3855C98.0792 11.0796 99.4198 9.07979 101.122 7.37711L99.7083 5.96289C97.8176 7.85354 96.3349 10.0704 95.2598 12.6044L97.101 13.3855ZM101.122 7.37711C102.864 5.63595 104.862 4.29801 107.124 3.3585L106.357 1.5115C103.852 2.55199 101.634 4.03738 99.7083 5.96289L101.122 7.37711ZM107.131 3.35558C109.42 2.38443 111.89 1.895 114.55 1.895V-0.105001C111.638 -0.105001 108.901 0.432236 106.35 1.51442L107.131 3.35558ZM114.55 1.895C117.173 1.895 119.604 2.38374 121.855 3.35341L122.646 1.51659C120.13 0.432921 117.428 -0.105001 114.55 -0.105001V1.895ZM121.872 3.36055C124.168 4.29996 126.162 5.63571 127.861 7.36993L129.29 5.97007C127.396 4.03762 125.173 2.55004 122.629 1.50945L121.872 3.36055ZM127.875 7.38421C129.61 9.08375 130.945 11.0773 131.885 13.3736L133.736 12.6164C132.695 10.0727 131.208 7.84958 129.275 5.95579L127.875 7.38421ZM131.892 13.3906C132.861 15.64 133.35 18.0892 133.35 20.75H135.35C135.35 17.8375 134.813 15.1167 133.729 12.5994L131.892 13.3906ZM133.35 20.75C133.35 23.4107 132.861 25.8803 131.89 28.1695L133.731 28.9505C134.813 26.3997 135.35 23.6627 135.35 20.75H133.35ZM131.887 28.1764C130.947 30.4382 129.609 32.4367 127.868 34.1779L129.282 35.5921C131.208 33.6666 132.693 31.4485 133.734 28.9436L131.887 28.1764ZM127.868 34.1779C126.166 35.8806 124.166 37.2211 121.86 38.1994L122.641 40.0406C125.175 38.9655 127.392 37.4828 129.282 35.5921L127.868 34.1779ZM121.867 38.1965C119.613 39.1327 117.177 39.605 114.55 39.605V41.605C117.423 41.605 120.121 41.0873 122.634 40.0435L121.867 38.1965ZM114.55 37.7C116.876 37.7 119.047 37.273 121.051 36.4082L120.259 34.5718C118.524 35.3203 116.625 35.7 114.55 35.7V37.7ZM121.051 36.4082C123.039 35.5508 124.78 34.3584 126.267 32.8329L124.834 31.4371C123.534 32.7716 122.012 33.8159 120.259 34.5718L121.051 36.4082ZM126.266 32.8331C127.791 31.2698 128.962 29.4521 129.78 27.3884L127.921 26.6516C127.198 28.4746 126.17 30.0669 124.834 31.4369L126.266 32.8331ZM129.774 27.4034C130.634 25.331 131.06 23.1098 131.06 20.75H129.06C129.06 22.8635 128.68 24.8223 127.927 26.6366L129.774 27.4034ZM131.06 20.75C131.06 18.356 130.635 16.1319 129.771 14.0904L127.929 14.8696C128.679 16.6414 129.06 18.5973 129.06 20.75H131.06ZM129.78 14.1116C128.962 12.0457 127.787 10.2427 126.257 8.71289L124.843 10.1271C126.173 11.4573 127.199 13.0276 127.921 14.8484L129.78 14.1116ZM126.275 8.73125C124.788 7.166 123.045 5.95158 121.051 5.09179L120.259 6.92821C122.006 7.68175 123.526 8.74067 124.825 10.1087L126.275 8.73125ZM121.051 5.09179C119.047 4.22695 116.876 3.8 114.55 3.8V5.8C116.625 5.8 118.524 6.17971 120.259 6.92821L121.051 5.09179ZM114.55 3.8C112.225 3.8 110.038 4.22699 108.001 5.08903L108.78 6.93097C110.556 6.17967 112.476 5.8 114.55 5.8V3.8ZM107.994 5.09179C106.004 5.95053 104.245 7.16222 102.724 8.7219L104.156 10.1181C105.496 8.74444 107.037 7.68281 108.786 6.92821L107.994 5.09179ZM102.724 8.72213C101.238 10.2477 100.069 12.0427 99.2168 14.0966L101.064 14.8634C101.825 13.0307 102.856 11.4523 104.157 10.1179L102.724 8.72213ZM99.2131 14.1055C98.391 16.1413 97.9854 18.3413 97.9854 20.695H99.9854C99.9854 18.5753 100.35 16.6321 101.068 14.8545L99.2131 14.1055ZM97.9854 20.695C97.9854 23.0834 98.3903 25.3179 99.2107 27.3884L101.07 26.6516C100.35 24.8354 99.9854 22.8533 99.9854 20.695H97.9854ZM99.2168 27.4034C100.068 29.4552 101.234 31.2648 102.715 32.8237L104.165 31.4463C102.86 30.0719 101.826 28.4715 101.064 26.6366L99.2168 27.4034ZM102.733 32.8421C104.253 34.3621 106.009 35.5518 107.994 36.4082L108.786 34.5718C107.032 33.8148 105.487 32.7679 104.147 31.4279L102.733 32.8421ZM108.001 36.411C110.038 37.273 112.225 37.7 114.55 37.7V35.7C112.476 35.7 110.556 35.3203 108.78 34.569L108.001 36.411ZM140.983 40H139.983V41H140.983V40ZM140.983 1.5V0.499997H139.983V1.5H140.983ZM145.218 1.5L146.021 0.904533L145.722 0.499997H145.218V1.5ZM168.373 32.74L167.57 33.3355L169.373 35.7685V32.74H168.373ZM168.373 1.5V0.499997H167.373V1.5H168.373ZM172.388 1.5H173.388V0.499997H172.388V1.5ZM172.388 40V41H173.388V40H172.388ZM168.648 40L167.843 40.5936L168.143 41H168.648V40ZM144.998 7.935L145.803 7.34142L143.998 4.89448V7.935H144.998ZM144.998 40V41H145.998V40H144.998ZM141.983 40V1.5H139.983V40H141.983ZM140.983 2.5H145.218V0.499997H140.983V2.5ZM144.415 2.09546L167.57 33.3355L169.176 32.1445L146.021 0.904533L144.415 2.09546ZM169.373 32.74V1.5H167.373V32.74H169.373ZM168.373 2.5H172.388V0.499997H168.373V2.5ZM171.388 1.5V40H173.388V1.5H171.388ZM172.388 39H168.648V41H172.388V39ZM169.453 39.4064L145.803 7.34142L144.193 8.52858L167.843 40.5936L169.453 39.4064ZM143.998 7.935V40H145.998V7.935H143.998ZM144.998 39H140.983V41H144.998V39ZM4.235 113H3.235V114H4.235V113ZM4.235 74.5V73.5H3.235V74.5H4.235ZM27.335 75.875L26.8948 76.7729L26.8948 76.7729L27.335 75.875ZM31.68 79.725L30.8309 80.2533L30.8351 80.26L30.8394 80.2667L31.68 79.725ZM31.02 92.1L30.2467 91.4659L30.2453 91.4676L31.02 92.1ZM25.08 95.895L24.7978 94.9356L23.6464 95.2743L24.1873 96.3457L25.08 95.895ZM33.715 113V114H35.34L34.6077 112.549L33.715 113ZM29.04 113L28.145 113.446L28.421 114H29.04V113ZM20.79 96.445L21.685 95.999L21.409 95.445H20.79V96.445ZM8.47 96.445V95.445H7.47V96.445H8.47ZM8.47 113V114H9.47V113H8.47ZM8.47 92.87H7.47V93.87H8.47V92.87ZM26.675 90.89L26.033 90.1232L26.0242 90.1307L26.675 90.89ZM26.675 80.275L26.0242 81.0343L26.0331 81.0418L26.675 80.275ZM8.47 78.295V77.295H7.47V78.295H8.47ZM5.235 113V74.5H3.235V113H5.235ZM4.235 75.5H20.735V73.5H4.235V75.5ZM20.735 75.5C23.1447 75.5 25.1882 75.9363 26.8948 76.7729L27.7752 74.9771C25.7418 73.9804 23.3853 73.5 20.735 73.5V75.5ZM26.8948 76.7729C28.6092 77.6133 29.9104 78.7739 30.8309 80.2533L32.5291 79.1967C31.3963 77.3761 29.8008 75.9701 27.7752 74.9771L26.8948 76.7729ZM30.8394 80.2667C31.7847 81.7335 32.275 83.4829 32.275 85.555H34.275C34.275 83.1537 33.702 81.0165 32.5206 79.1833L30.8394 80.2667ZM32.275 85.555C32.275 87.8705 31.5932 89.8239 30.2467 91.4659L31.7933 92.7341C33.4535 90.7094 34.275 88.2995 34.275 85.555H32.275ZM30.2453 91.4676C28.9212 93.0897 27.122 94.252 24.7978 94.9356L25.3622 96.8544C28.0246 96.0713 30.1855 94.7037 31.7947 92.7324L30.2453 91.4676ZM24.1873 96.3457L32.8223 113.451L34.6077 112.549L25.9727 95.4443L24.1873 96.3457ZM33.715 112H29.04V114H33.715V112ZM29.935 112.554L21.685 95.999L19.895 96.891L28.145 113.446L29.935 112.554ZM20.79 95.445H8.47V97.445H20.79V95.445ZM7.47 96.445V113H9.47V96.445H7.47ZM8.47 112H4.235V114H8.47V112ZM8.47 93.87H20.46V91.87H8.47V93.87ZM20.46 93.87C23.2328 93.87 25.5581 93.1644 27.3258 91.6493L26.0242 90.1307C24.7119 91.2556 22.8939 91.87 20.46 91.87V93.87ZM27.3169 91.6568C29.1422 90.1286 30.04 88.0582 30.04 85.555H28.04C28.04 87.5252 27.3611 89.0114 26.0331 90.1232L27.3169 91.6568ZM30.04 85.555C30.04 83.0826 29.138 81.0329 27.3169 79.5082L26.0331 81.0418C27.3653 82.1571 28.04 83.6274 28.04 85.555H30.04ZM27.3258 79.5157C25.5581 78.0006 23.2328 77.295 20.46 77.295V79.295C22.8939 79.295 24.7119 79.9094 26.0242 81.0343L27.3258 79.5157ZM20.46 77.295H8.47V79.295H20.46V77.295ZM7.47 78.295V92.87H9.47V78.295H7.47ZM49.9142 112.12L49.5186 113.038L49.5271 113.042L49.5356 113.046L49.9142 112.12ZM43.5892 107.885L42.875 108.585L42.8821 108.592L42.8893 108.599L43.5892 107.885ZM39.3542 101.56L38.4287 101.939L38.4322 101.947L38.4358 101.956L39.3542 101.56ZM39.3542 85.995L38.4336 85.6044L38.4307 85.6114L39.3542 85.995ZM43.5892 79.67L44.2963 80.3771L44.2963 80.3771L43.5892 79.67ZM49.9142 75.435L50.2978 76.3585L50.3048 76.3556L49.9142 75.435ZM65.4242 75.435L65.0286 76.3534L65.0371 76.3571L65.0456 76.3605L65.4242 75.435ZM71.7492 79.67L71.035 80.3699L71.0421 80.3771L71.0493 80.3842L71.7492 79.67ZM75.9842 85.995L75.0587 86.3736L75.0622 86.3822L75.0658 86.3906L75.9842 85.995ZM75.9842 101.56L75.0636 101.169L75.0607 101.176L75.9842 101.56ZM71.7492 107.885L72.4563 108.592L72.4563 108.592L71.7492 107.885ZM65.4242 112.12L65.8078 113.044L65.8148 113.041L65.4242 112.12ZM63.8292 108.49L63.4331 107.572L63.8292 108.49ZM68.7242 105.135L68.0082 104.437L68.008 104.437L68.7242 105.135ZM72.0242 100.02L71.1006 99.6366L71.0975 99.6441L71.0945 99.6516L72.0242 100.02ZM72.0242 87.48L71.0945 87.8484L71.0988 87.8591L71.1033 87.8696L72.0242 87.48ZM68.7242 82.42L67.9992 83.1087L68.008 83.118L68.0171 83.1271L68.7242 82.42ZM63.8292 79.01L63.4331 79.9282L63.8292 79.01ZM51.5642 79.01L51.1746 78.089L51.1681 78.0918L51.5642 79.01ZM46.6142 82.42L45.8982 81.7219L45.898 81.7221L46.6142 82.42ZM43.3142 87.48L42.3906 87.0966L42.387 87.1055L43.3142 87.48ZM43.3142 100.02L42.3845 100.388L42.3875 100.396L42.3906 100.403L43.3142 100.02ZM46.6142 105.135L45.8892 105.824L45.898 105.833L45.9071 105.842L46.6142 105.135ZM51.5642 108.49L51.1681 109.408L51.1746 109.411L51.5642 108.49ZM57.7242 112.605C55.0588 112.605 52.5849 112.132 50.2929 111.194L49.5356 113.046C52.0835 114.088 54.8163 114.605 57.7242 114.605V112.605ZM50.3098 111.202C48.0384 110.223 46.0335 108.88 44.2891 107.171L42.8893 108.599C44.8116 110.483 47.0234 111.964 49.5186 113.038L50.3098 111.202ZM44.3034 107.185C42.594 105.441 41.2511 103.436 40.2726 101.164L38.4358 101.956C39.5107 104.451 40.9911 106.663 42.875 108.585L44.3034 107.185ZM40.2798 101.181C39.3421 98.8893 38.8692 96.4155 38.8692 93.75H36.8692C36.8692 96.6579 37.3863 99.3907 38.4287 101.939L40.2798 101.181ZM38.8692 93.75C38.8692 91.0844 39.3421 88.6309 40.2777 86.3786L38.4307 85.6114C37.3863 88.1257 36.8692 90.8423 36.8692 93.75H38.8692ZM40.2748 86.3855C41.2531 84.0796 42.5936 82.0798 44.2963 80.3771L42.8821 78.9629C40.9915 80.8535 39.5087 83.0704 38.4336 85.6044L40.2748 86.3855ZM44.2963 80.3771C46.0375 78.636 48.036 77.298 50.2978 76.3585L49.5306 74.5115C47.0257 75.552 44.8076 77.0374 42.8821 78.9629L44.2963 80.3771ZM50.3048 76.3556C52.5939 75.3844 55.0636 74.895 57.7242 74.895V72.895C54.8115 72.895 52.0745 73.4322 49.5237 74.5144L50.3048 76.3556ZM57.7242 74.895C60.3464 74.895 62.7776 75.3837 65.0286 76.3534L65.8198 74.5166C63.3042 73.4329 60.602 72.895 57.7242 72.895V74.895ZM65.0456 76.3605C67.3419 77.3 69.3355 78.6357 71.035 80.3699L72.4634 78.9701C70.5696 77.0376 68.3465 75.55 65.8029 74.5095L65.0456 76.3605ZM71.0493 80.3842C72.7835 82.0837 74.1193 84.0773 75.0587 86.3736L76.9098 85.6164C75.8692 83.0727 74.3816 80.8496 72.4491 78.9558L71.0493 80.3842ZM75.0658 86.3906C76.0348 88.64 76.5242 91.0892 76.5242 93.75H78.5242C78.5242 90.8375 77.987 88.1167 76.9026 85.5994L75.0658 86.3906ZM76.5242 93.75C76.5242 96.4107 76.0348 98.8803 75.0636 101.169L76.9048 101.951C77.987 99.3997 78.5242 96.6627 78.5242 93.75H76.5242ZM75.0607 101.176C74.1212 103.438 72.7833 105.437 71.0421 107.178L72.4563 108.592C74.3818 106.667 75.8672 104.448 76.9077 101.944L75.0607 101.176ZM71.0421 107.178C69.3394 108.881 67.3396 110.221 65.0337 111.199L65.8148 113.041C68.3488 111.966 70.5657 110.483 72.4563 108.592L71.0421 107.178ZM65.0406 111.197C62.7867 112.133 60.3513 112.605 57.7242 112.605V114.605C60.5971 114.605 63.2951 114.087 65.8078 113.043L65.0406 111.197ZM57.7242 110.7C60.0494 110.7 62.2205 110.273 64.2253 109.408L63.4331 107.572C61.698 108.32 59.7991 108.7 57.7242 108.7V110.7ZM64.2253 109.408C66.2129 108.551 67.954 107.358 69.4404 105.833L68.008 104.437C66.7078 105.772 65.1855 106.816 63.4331 107.572L64.2253 109.408ZM69.4402 105.833C70.9645 104.27 72.1362 102.452 72.9539 100.388L71.0945 99.6516C70.3722 101.475 69.344 103.067 68.0082 104.437L69.4402 105.833ZM72.9478 100.403C73.808 98.331 74.2342 96.1098 74.2342 93.75H72.2342C72.2342 95.8635 71.8537 97.8223 71.1006 99.6366L72.9478 100.403ZM74.2342 93.75C74.2342 91.356 73.8089 89.1319 72.9452 87.0904L71.1033 87.8696C71.8529 89.6414 72.2342 91.5973 72.2342 93.75H74.2342ZM72.9539 87.1116C72.1353 85.0457 70.9611 83.2427 69.4313 81.7129L68.0171 83.1271C69.3473 84.4573 70.3731 86.0276 71.0945 87.8484L72.9539 87.1116ZM69.4492 81.7312C67.9622 80.166 66.2185 78.9516 64.2253 78.0918L63.4331 79.9282C65.18 80.6818 66.6995 81.7407 67.9992 83.1087L69.4492 81.7312ZM64.2253 78.0918C62.2205 77.227 60.0494 76.8 57.7242 76.8V78.8C59.7991 78.8 61.698 79.1797 63.4331 79.9282L64.2253 78.0918ZM57.7242 76.8C55.3989 76.8 53.2121 77.227 51.1746 78.089L51.9539 79.931C53.7296 79.1797 55.6496 78.8 57.7242 78.8V76.8ZM51.1681 78.0918C49.1774 78.9505 47.4189 80.1622 45.8982 81.7219L47.3302 83.1181C48.6695 81.7444 50.211 80.6828 51.9603 79.9282L51.1681 78.0918ZM45.898 81.7221C44.4115 83.2477 43.2432 85.0427 42.3906 87.0966L44.2378 87.8634C44.9986 86.0307 46.0302 84.4523 47.3304 83.1179L45.898 81.7221ZM42.387 87.1055C41.5649 89.1413 41.1592 91.3413 41.1592 93.695H43.1592C43.1592 91.5753 43.5236 89.6321 44.2415 87.8545L42.387 87.1055ZM41.1592 93.695C41.1592 96.0834 41.5642 98.3179 42.3845 100.388L44.2439 99.6516C43.5243 97.8354 43.1592 95.8533 43.1592 93.695H41.1592ZM42.3906 100.403C43.2423 102.455 44.4082 104.265 45.8892 105.824L47.3392 104.446C46.0336 103.072 44.9994 101.471 44.2378 99.6366L42.3906 100.403ZM45.9071 105.842C47.4272 107.362 49.1829 108.552 51.1681 109.408L51.9603 107.572C50.2056 106.815 48.6613 105.768 47.3213 104.428L45.9071 105.842ZM51.1746 109.411C53.2121 110.273 55.3989 110.7 57.7242 110.7V108.7C55.6496 108.7 53.7296 108.32 51.9539 107.569L51.1746 109.411ZM91.9789 113H90.9789V114H91.9789V113ZM91.9789 78.295H92.9789V77.295H91.9789V78.295ZM78.0639 78.295H77.0639V79.295H78.0639V78.295ZM78.0639 74.5V73.5H77.0639V74.5H78.0639ZM110.129 74.5H111.129V73.5H110.129V74.5ZM110.129 78.295V79.295H111.129V78.295H110.129ZM96.2139 78.295V77.295H95.2139V78.295H96.2139ZM96.2139 113V114H97.2139V113H96.2139ZM92.9789 113V78.295H90.9789V113H92.9789ZM91.9789 77.295H78.0639V79.295H91.9789V77.295ZM79.0639 78.295V74.5H77.0639V78.295H79.0639ZM78.0639 75.5H110.129V73.5H78.0639V75.5ZM109.129 74.5V78.295H111.129V74.5H109.129ZM110.129 77.295H96.2139V79.295H110.129V77.295ZM95.2139 78.295V113H97.2139V78.295H95.2139ZM96.2139 112H91.9789V114H96.2139V112ZM115.309 113H114.309V114H115.309V113ZM115.309 74.5V73.5H114.309V74.5H115.309ZM119.544 74.5H120.544V73.5H119.544V74.5ZM119.544 91.715H118.544V92.715H119.544V91.715ZM141.929 91.715V92.715H142.929V91.715H141.929ZM141.929 74.5V73.5H140.929V74.5H141.929ZM146.164 74.5H147.164V73.5H146.164V74.5ZM146.164 113V114H147.164V113H146.164ZM141.929 113H140.929V114H141.929V113ZM141.929 95.51H142.929V94.51H141.929V95.51ZM119.544 95.51V94.51H118.544V95.51H119.544ZM119.544 113V114H120.544V113H119.544ZM116.309 113V74.5H114.309V113H116.309ZM115.309 75.5H119.544V73.5H115.309V75.5ZM118.544 74.5V91.715H120.544V74.5H118.544ZM119.544 92.715H141.929V90.715H119.544V92.715ZM142.929 91.715V74.5H140.929V91.715H142.929ZM141.929 75.5H146.164V73.5H141.929V75.5ZM145.164 74.5V113H147.164V74.5H145.164ZM146.164 112H141.929V114H146.164V112ZM142.929 113V95.51H140.929V113H142.929ZM141.929 94.51H119.544V96.51H141.929V94.51ZM118.544 95.51V113H120.544V95.51H118.544ZM119.544 112H115.309V114H119.544V112ZM154.626 113H153.626V114H154.626V113ZM154.626 74.5V73.5H153.626V74.5H154.626ZM182.181 74.5H183.181V73.5H182.181V74.5ZM182.181 78.24V79.24H183.181V78.24H182.181ZM158.861 78.24V77.24H157.861V78.24H158.861ZM158.861 91.715H157.861V92.715H158.861V91.715ZM174.096 91.715H175.096V90.715H174.096V91.715ZM174.096 95.4V96.4H175.096V95.4H174.096ZM158.861 95.4V94.4H157.861V95.4H158.861ZM158.861 109.26H157.861V110.26H158.861V109.26ZM182.401 109.26H183.401V108.26H182.401V109.26ZM182.401 113V114H183.401V113H182.401ZM155.626 113V74.5H153.626V113H155.626ZM154.626 75.5H182.181V73.5H154.626V75.5ZM181.181 74.5V78.24H183.181V74.5H181.181ZM182.181 77.24H158.861V79.24H182.181V77.24ZM157.861 78.24V91.715H159.861V78.24H157.861ZM158.861 92.715H174.096V90.715H158.861V92.715ZM173.096 91.715V95.4H175.096V91.715H173.096ZM174.096 94.4H158.861V96.4H174.096V94.4ZM157.861 95.4V109.26H159.861V95.4H157.861ZM158.861 110.26H182.401V108.26H158.861V110.26ZM181.401 109.26V113H183.401V109.26H181.401ZM182.401 112H154.626V114H182.401V112ZM188.517 113H187.517V114H188.517V113ZM188.517 74.5V73.5H187.517V74.5H188.517ZM211.617 75.875L211.177 76.7729L211.177 76.7729L211.617 75.875ZM215.962 79.725L215.113 80.2533L215.117 80.26L215.122 80.2667L215.962 79.725ZM215.302 92.1L214.529 91.4659L214.528 91.4676L215.302 92.1ZM209.362 95.895L209.08 94.9356L207.929 95.2743L208.47 96.3457L209.362 95.895ZM217.997 113V114H219.622L218.89 112.549L217.997 113ZM213.322 113L212.427 113.446L212.703 114H213.322V113ZM205.072 96.445L205.967 95.999L205.691 95.445H205.072V96.445ZM192.752 96.445V95.445H191.752V96.445H192.752ZM192.752 113V114H193.752V113H192.752ZM192.752 92.87H191.752V93.87H192.752V92.87ZM210.957 90.89L210.315 90.1232L210.306 90.1307L210.957 90.89ZM210.957 80.275L210.306 81.0343L210.315 81.0418L210.957 80.275ZM192.752 78.295V77.295H191.752V78.295H192.752ZM189.517 113V74.5H187.517V113H189.517ZM188.517 75.5H205.017V73.5H188.517V75.5ZM205.017 75.5C207.427 75.5 209.47 75.9363 211.177 76.7729L212.057 74.9771C210.024 73.9804 207.668 73.5 205.017 73.5V75.5ZM211.177 76.7729C212.891 77.6133 214.193 78.7739 215.113 80.2533L216.811 79.1967C215.678 77.3761 214.083 75.9701 212.057 74.9771L211.177 76.7729ZM215.122 80.2667C216.067 81.7335 216.557 83.4829 216.557 85.555H218.557C218.557 83.1537 217.984 81.0165 216.803 79.1833L215.122 80.2667ZM216.557 85.555C216.557 87.8705 215.875 89.8239 214.529 91.4659L216.075 92.7341C217.736 90.7094 218.557 88.2995 218.557 85.555H216.557ZM214.528 91.4676C213.203 93.0897 211.404 94.252 209.08 94.9356L209.644 96.8544C212.307 96.0713 214.468 94.7037 216.077 92.7324L214.528 91.4676ZM208.47 96.3457L217.105 113.451L218.89 112.549L210.255 95.4443L208.47 96.3457ZM217.997 112H213.322V114H217.997V112ZM214.217 112.554L205.967 95.999L204.177 96.891L212.427 113.446L214.217 112.554ZM205.072 95.445H192.752V97.445H205.072V95.445ZM191.752 96.445V113H193.752V96.445H191.752ZM192.752 112H188.517V114H192.752V112ZM192.752 93.87H204.742V91.87H192.752V93.87ZM204.742 93.87C207.515 93.87 209.84 93.1644 211.608 91.6493L210.306 90.1307C208.994 91.2556 207.176 91.87 204.742 91.87V93.87ZM211.599 91.6568C213.424 90.1286 214.322 88.0582 214.322 85.555H212.322C212.322 87.5252 211.643 89.0114 210.315 90.1232L211.599 91.6568ZM214.322 85.555C214.322 83.0826 213.42 81.0329 211.599 79.5082L210.315 81.0418C211.648 82.1571 212.322 83.6274 212.322 85.555H214.322ZM211.608 79.5157C209.84 78.0006 207.515 77.295 204.742 77.295V79.295C207.176 79.295 208.994 79.9094 210.306 81.0343L211.608 79.5157ZM204.742 77.295H192.752V79.295H204.742V77.295ZM191.752 78.295V92.87H193.752V78.295H191.752ZM233.185 113H232.185V114H233.185V113ZM233.185 78.295H234.185V77.295H233.185V78.295ZM219.27 78.295H218.27V79.295H219.27V78.295ZM219.27 74.5V73.5H218.27V74.5H219.27ZM251.335 74.5H252.335V73.5H251.335V74.5ZM251.335 78.295V79.295H252.335V78.295H251.335ZM237.42 78.295V77.295H236.42V78.295H237.42ZM237.42 113V114H238.42V113H237.42ZM234.185 113V78.295H232.185V113H234.185ZM233.185 77.295H219.27V79.295H233.185V77.295ZM220.27 78.295V74.5H218.27V78.295H220.27ZM219.27 75.5H251.335V73.5H219.27V75.5ZM250.335 74.5V78.295H252.335V74.5H250.335ZM251.335 77.295H237.42V79.295H251.335V77.295ZM236.42 78.295V113H238.42V78.295H236.42ZM237.42 112H233.185V114H237.42V112Z`;

const logoSize = {
  width: 252,
  height: 114,
};

const arrow = new Path2D("M4.5 4L101 100.5L197.5 4");
const arrowSize = {
  width: 202,
  height: 108,
};

export class Hero {
  ctx: CanvasRenderingContext2D;
  path2D = new Path2D(svgPath);
  size: [number, number] = [window.innerWidth * 2, window.innerHeight * 2];

  get Ratio() {
    return window.devicePixelRatio;
  }

  constructor(
    private readonly canvas: HTMLCanvasElement,
    sceneCTL: SceneController
  ) {
    this.ctx = canvas.getContext("2d");
    this.ctx.beginPath();

    this.ctx.fill("evenodd");

    sceneCTL.$scene.subscribe((progress) => this.drawLogo());
    window.addEventListener("resize", () => this.resize());
    requestAnimationFrame(() => this.resize());
  }

  resize() {
    this.before = 0;
    this.size = [
      window.innerWidth * this.Ratio,
      window.innerHeight * this.Ratio,
    ];
    const [width, height] = this.size;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, width, height);

    this.canvas.width = width;
    this.canvas.height = height;
    this.drawLogo();
  }

  before = 0;
  drawLogo() {
    const [width, height] = this.size;

    const scaleX = width / logoSize.width;
    const scaleY = height / logoSize.height;
    const scale = Math.max(1, Math.min(scaleX, scaleY));
    const stepSize = height / 90;
    // const realStepSize = window.innerHeight / 90;

    this.ctx.scale(scale, scale);
    this.ctx.translate(0, height / 2 / scale - logoSize.height / 2);
    this.ctx.translate(0, this.before / scale);

    const y = window.scrollY * this.Ratio;

    for (this.before = this.before; this.before <= y; this.before += stepSize) {
      this.ctx.translate(0, stepSize / scale);

      const progress = Math.min(1, this.before / (window.innerHeight / 2));
      this.ctx.fillStyle = `rgb(${new Array(3)
        .fill(255 * (1 - progress))
        .join(",")})`;
      this.ctx.fill(this.path2D);
    }

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}
