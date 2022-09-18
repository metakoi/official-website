import React from "react";
import PLCLogo from "../images/plc-logo.svg"

function PressLogos() {
  return (
    <section className="relative">
      {/* Illustration */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400">
              我们感谢
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-sm md:text-xl text-gray-500 font-uncut-sans">
              </p>
            </div>
          </div>
          {/* Items */}
          <div className="max-w-sm md:max-w-5xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4  text-gray-400">
            {/* Item */}
            <div
              className="flex items-center justify-start py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
            >
              <svg
                className="max-w-full fill-current"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.1667 32.1875H21.7014L18.75 29.4792V28.0903L21.8056 25.1736V20.5556L25.7986 17.9514L30.3472 21.3889L24.1667 32.1875ZM13.9583 24.8958L14.4097 20.5556L12.9167 16.6667H21.7361L20.2778 20.5556L20.6944 24.8958H17.2917H13.9583ZM15.9722 29.4792L13.0208 32.2222H10.5208L4.30556 21.3889L8.88889 17.9861L12.9167 20.5556V25.1736L15.9722 28.0903V29.4792ZM10.4861 8.64584H24.1319L25.7639 15.5903H8.88889L10.4861 8.64584ZM17.3264 0L0 10V30L17.3264 40L34.6528 30V10L17.3264 0Z" />
              </svg>
              <span className="text-xl font-bold">crypto.com</span>
            </div>
            {/* Item */}
            <div
              className="flex items-center justify-start py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <svg
                className="max-w-full fill-current ml-2"
                width="30"
                height="45"
                viewBox="0 0 30 45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.3665 0L2.4136 5.31335L11.3665 10.6287L20.4879 5.31335L11.3665 0ZM12.8389 28.3713V39L25 31.9724V21.3417L12.8389 28.3713ZM21.9602 8.65551V19.2862L12.8369 24.6016V13.9709L21.9602 8.65551ZM0 19.2862L9.12334 24.6016V13.9709L0 8.65551V19.2862ZM0 33.6867L9.12334 39V28.3713L0 23.058V33.6846V33.6867Z" />
              </svg>
              <span className="text-xl font-bold">Bancor</span>
            </div>
            {/* Item */}
            <div
              className="flex items-center justify-start py-2 col-span-2 md:col-auto "
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <svg
                className="max-w-full fill-current"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.8468 17.9492L21.0042 9.79511L29.1649 17.9559L33.9088 13.2087L21.0042 0.300781L8.09961 13.2054L12.8468 17.9492Z" />
                <path d="M0 21.3022L4.74543 16.5568L9.49086 21.3022L4.74543 26.0477L0 21.3022Z" />
                <path d="M12.8466 24.6537L21.004 32.8111L29.1647 24.6504L33.9119 29.3909L33.9086 29.3942L21.004 42.3021L8.09941 29.4009L8.09277 29.3942L12.8466 24.6537Z" />
                <path d="M32.5088 21.3032L37.2542 16.5578L41.9996 21.3032L37.2542 26.0487L32.5088 21.3032Z" />
                <path d="M25.8173 21.2997L21.0037 16.4829L17.4442 20.0425L17.0328 20.4505L16.1902 21.2931L16.1836 21.2997L16.1902 21.3097L21.0037 26.1199L25.8173 21.3031L25.8206 21.2997H25.8173Z" />
              </svg>
              <span className="text-xl font-bold">Binance</span>
            </div>
            {/* Item */}
            <div
              className="flex items-center justify-start py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <svg
                className="max-w-full fill-current"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 0C32.5992 0 42 9.40078 42 21C42 32.5992 32.5992 42 21 42C9.40078 42 0 32.5992 0 21C0 9.40078 9.40078 0 21 0Z" />
                <path
                  d="M21.0041 28.3828C16.9271 28.3828 13.6213 25.0811 13.6213 21C13.6213 16.9189 16.9271 13.6172 21.0041 13.6172C24.6586 13.6172 27.6938 16.2832 28.2762 19.7695H35.7123C35.0848 12.1898 28.7396 6.23438 21 6.23438C12.8461 6.23438 6.23438 12.8461 6.23438 21C6.23438 29.1539 12.8461 35.7656 21 35.7656C28.7396 35.7656 35.0848 29.8102 35.7123 22.2305H28.2721C27.6855 25.7168 24.6586 28.3828 21.0041 28.3828Z"
                  className="fill-gray-700 md:fill-gray-900"
                />
              </svg>
              <span className="text-xl font-bold">Coinbase</span>
            </div>
            {/* <div
              className="flex items-center justify-start py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <svg className="max-w-full fill-current" width="45" height="45" viewBox="0 0 373 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.3085 243.718C48.6818 241.496 49.9062 239.185 51.4131 237.04C53.6405 233.845 56.1065 230.822 58.7901 227.998C67.9762 218.377 78.3276 210.127 89.1303 202.415C99.2845 195.17 109.938 188.731 120.907 182.794C130.045 177.848 139.431 173.411 148.829 168.999C149.486 168.68 150.011 168.144 150.317 167.481C150.557 167.016 150.428 166.795 149.907 166.795H149.14C141.95 166.795 134.757 166.683 127.568 166.83C122.283 166.939 117.004 166.797 111.728 166.701C107.115 166.616 102.498 166.336 97.8893 165.964C94.2643 165.671 90.6372 165.393 87.0275 164.98C82.7696 164.494 78.5226 163.887 74.2931 163.215C67.5063 162.141 60.7836 160.695 54.1554 158.886C46.5331 156.793 38.9284 154.622 31.8624 150.964C25.9486 147.902 20.6196 144.069 16.0922 139.176C10.3185 132.918 6.32557 125.619 3.73224 117.548C3.61178 117.174 3.43874 116.815 3.29418 116.455C2.49472 113.505 1.57261 110.581 1.27911 107.516C1.15361 107.321 1.09446 107.091 1.11045 106.86L1.06446 106.204C0.549738 105.465 0.845415 104.59 0.665809 103.799C0.652667 103.58 0.641733 103.361 0.628591 103.143C0.40956 102.725 0.696518 102.235 0.438062 101.831C0.14237 100.683 0.297848 99.4996 0.183952 98.332C-0.162117 97.6235 0.21246 96.856 0 96.1454C0 93.4631 0 90.7794 0 88.0943C0.232173 87.7553 -4.27821e-05 87.3399 0.175182 87.001L0.219031 85.4703C0.455584 85.1314 0.203665 84.7094 0.402983 84.3639C0.440087 83.1131 0.594843 81.8685 0.865162 80.6466C0.696508 80.3012 0.900185 80.041 1.06227 79.772C1.07322 79.6299 1.08201 79.4855 1.09296 79.3347C1.23752 79.0592 1.09295 78.7202 1.29445 78.46C1.42806 77.4214 1.57264 76.3849 1.9647 75.3988C2.13116 74.8915 2.11145 74.3361 2.40276 73.8681C2.78826 71.9898 3.47161 70.2078 4.18346 68.4344C4.25355 68.1021 4.27986 67.75 4.59088 67.5248C4.9698 66.4818 5.33122 65.4278 5.91822 64.4635C6.04088 64.2449 5.98608 63.8994 6.31243 63.7879L6.79434 62.7142C6.88043 62.3964 7.02938 62.099 7.23241 61.8396L7.67047 61.1464C7.83255 60.7616 7.92015 60.333 8.31441 60.0903C8.55534 59.2288 9.19054 58.5968 9.64175 57.8643C9.72334 57.443 9.9572 57.0664 10.2988 56.806L11.8627 54.6588C11.8832 54.5529 11.9289 54.4535 11.996 54.369C12.0631 54.2845 12.1496 54.2174 12.2482 54.1733L13.4178 52.6777C13.512 52.2404 13.9325 52.072 14.2041 51.7812L14.4889 51.3876C14.6181 51.088 14.7627 50.7994 15.1044 50.6813L15.5643 50.209C15.7451 49.9775 15.9557 49.7709 16.1908 49.5946L19.0841 46.5858C19.4258 46.2665 19.7719 45.9495 20.1399 45.6587C20.4509 45.1273 20.9744 44.8452 21.4781 44.5413C21.7432 44.2352 21.9535 43.8656 22.374 43.7301L23.7166 42.6368C23.8465 42.4127 24.0549 42.2445 24.3015 42.1645C25.7449 41.1061 27.0985 39.9166 28.7062 39.1032C28.8989 38.7402 29.2406 38.5893 29.6064 38.4734C30.2854 37.7825 31.2535 37.5266 31.985 36.9166C32.1704 36.7104 32.4194 36.5719 32.6926 36.523L34.839 35.3816C34.9836 35.1082 35.2574 35.0558 35.5202 34.9792L35.9386 34.7278C36.1926 34.5091 36.5299 34.4741 36.8147 34.308L37.2528 34.0652C37.4893 33.8138 37.8288 33.7766 38.1289 33.652C38.3808 33.4202 38.7246 33.3786 39.005 33.2146L40.5382 32.5412C40.7113 32.1432 41.1559 32.3225 41.4253 32.1235C43.127 31.3491 44.8771 30.6852 46.6645 30.1359C46.9514 29.7664 47.4333 29.9172 47.7838 29.7204L52.5827 28.4085C52.8346 28.1395 53.1916 28.3276 53.4764 28.2029C53.9649 28.033 54.4792 27.9487 54.9964 27.9537C55.1884 27.8208 55.4208 27.7589 55.6535 27.7787L59.3771 27.2911C59.7888 27.0222 60.2839 27.3414 60.6913 27.1053L61.7733 27.0724C62.4939 26.8057 63.2671 27.1796 63.9855 26.8888H67.8821C68.5983 27.1555 69.3627 26.845 70.0833 27.0724L71.599 27.1096C71.9429 27.3414 72.3656 27.0899 72.7139 27.2955C74.9896 27.641 77.2719 27.9515 79.5039 28.52C79.8575 28.5856 80.2155 28.6258 80.5749 28.6403C81.1247 28.918 81.865 28.5047 82.3271 29.1191L86.4887 30.3895C86.8523 30.5623 87.3517 30.3633 87.6146 30.805C88.4031 31.1308 89.1653 31.5288 90.013 31.695C90.5876 31.7033 91.1369 31.9328 91.5462 32.3356C92.8211 33.0082 94.138 33.5984 95.4887 34.1024C95.7954 34.2183 96.1458 34.2489 96.3758 34.5266C97.3159 35.174 98.3364 35.6966 99.4116 36.0813C99.6853 36.1535 99.9767 36.2016 100.091 36.5186L102.489 37.8175C102.896 37.9815 103.348 38.0711 103.584 38.5019L109.936 42.6236C110.188 42.7286 110.49 42.7614 110.593 43.0828C111.33 43.7458 112.138 44.3252 113.002 44.8103C113.276 45.0595 113.714 45.0923 113.879 45.4837C113.917 45.5565 113.976 45.6162 114.049 45.6552C114.121 45.6941 114.204 45.7106 114.286 45.7024C114.724 45.9036 115.201 46.085 115.405 46.5923L116.735 47.6529C117.092 47.7906 117.444 47.9305 117.611 48.3241L121.115 51.1667C121.312 51.3504 121.659 51.3329 121.753 51.65C122.298 52.3563 123.049 52.822 123.739 53.3577C123.843 53.3906 123.938 53.4473 124.017 53.5232C124.095 53.5991 124.155 53.6922 124.191 53.795L124.83 54.2695C125.268 54.4095 125.487 54.7725 125.717 55.1223L127.222 56.4343C127.609 56.6231 127.926 56.9293 128.129 57.3089L130.961 59.9329C131.247 60.0771 131.482 60.3063 131.633 60.5889C132.205 61.3247 132.867 61.9859 133.605 62.5568C134.089 62.7786 134.478 63.1665 134.7 63.6501C135.718 64.8093 136.803 65.9088 137.948 66.9431C138.059 66.9569 138.163 67.0074 138.242 67.0866C138.322 67.1659 138.372 67.2693 138.386 67.3805C138.605 67.6691 138.682 68.0889 139.087 68.2333C139.453 68.449 139.755 68.7575 139.963 69.1276L141.496 70.855C142.153 71.2333 142.747 71.6684 143.003 72.4272C143.047 72.8492 143.349 73.0657 143.66 73.2712C143.769 73.2985 143.868 73.3559 143.945 73.4367C144.023 73.5176 144.076 73.6186 144.098 73.7282C144.295 74.0322 144.379 74.4279 144.775 74.5722C145.042 74.7472 145.351 74.8871 145.417 75.2523C146.731 76.8558 148.045 78.4527 149.359 80.0431C149.872 80.3363 150.264 80.801 150.465 81.3551L150.658 81.5847C151.151 81.9258 151.578 82.3238 151.753 82.9207L152.021 83.3209C152.601 83.5833 152.829 84.1256 153.085 84.6482L153.276 84.8668C153.659 84.9127 153.582 85.3041 153.747 85.5053L157.236 90.0972C157.347 90.1236 157.447 90.182 157.525 90.2652C157.603 90.3485 157.655 90.4528 157.674 90.5651C158.388 91.5906 159.093 92.6249 159.822 93.6417C160.699 94.8706 161.608 96.0863 162.501 97.3086C162.898 97.4726 163.044 97.8225 163.158 98.1833C163.68 99.2197 164.44 100.092 165.112 101.026C165.654 101.386 166.048 101.93 166.22 102.557L166.468 102.972C166.57 103.011 166.66 103.076 166.73 103.161C166.8 103.245 166.847 103.345 166.867 103.453C168.387 105.902 169.933 108.331 171.666 110.643C171.863 110.825 172.018 111.049 172.119 111.299C172.538 112.155 173.052 112.962 173.652 113.704C174.003 113.783 173.994 114.111 174.11 114.36C174.922 115.705 175.665 117.095 176.686 118.307C177.012 118.499 177.003 118.884 177.181 119.164C178.392 121.077 179.502 123.056 180.871 124.871C181.294 124.912 181.231 124.595 181.231 124.361C181.231 119.885 181.206 115.409 181.217 110.933C181.231 105.659 181.217 100.383 181.244 95.1067C181.257 95.0356 181.281 94.9669 181.316 94.9034L181.349 90.9806C181.605 90.1868 181.301 89.3516 181.518 88.5556L181.57 86.1656C181.575 85.5786 181.633 84.9931 181.743 84.4164C181.524 83.7604 181.881 83.1044 181.789 82.4484C182.043 81.9564 181.754 81.401 181.969 80.9047L182.008 79.3915C182.253 78.9717 181.977 78.4819 182.192 78.0599L182.227 76.9841C182.475 76.643 182.164 76.2122 182.409 75.8711C182.422 75.5125 182.433 75.1539 182.446 74.7975C182.681 74.4563 182.424 74.0322 182.632 73.6867C182.697 72.293 182.855 70.9051 183.103 69.5321C183.064 69.1494 183.222 68.804 183.292 68.4388L183.318 68.0015C183.289 67.621 183.436 67.2733 183.515 66.9082C183.515 66.766 183.53 66.6217 183.539 66.4708C183.644 66.1079 183.515 65.7033 183.745 65.3644C183.977 63.3024 184.42 61.2776 184.84 59.2419C185.101 58.9117 184.799 58.47 185.059 58.1486C185.521 55.7149 186.141 53.3227 186.811 50.9328C186.952 50.6551 186.709 50.2768 187.031 50.0581C187.985 46.905 188.842 43.717 190.097 40.6557C190.281 40.3058 190.079 39.8029 190.535 39.5624C192.699 33.4108 195.722 27.5953 199.515 22.2882C199.734 21.993 199.969 21.7153 200.19 21.4135C200.217 21.3118 200.266 21.2177 200.336 21.1384C200.405 21.0591 200.491 20.9969 200.589 20.9565L201.708 19.4259C201.94 19.1438 202.003 18.7196 202.413 18.5862L202.632 18.3675C202.64 18.3173 202.662 18.2703 202.695 18.2317C202.729 18.1931 202.772 18.1644 202.82 18.1489L203.234 17.6482C203.316 17.4599 203.469 17.3114 203.659 17.2349L204.165 16.6095C204.29 16.1722 204.676 15.9732 204.993 15.7152L205.65 15.0592C205.999 14.5257 206.382 14.0293 206.993 13.7713C207.979 12.7064 209.129 11.8252 210.25 10.9134C210.623 10.402 211.147 10.0197 211.748 9.82008C211.947 9.45929 212.355 9.38276 212.653 9.14441C212.764 8.86016 213.06 8.84485 213.281 8.70709L214.631 7.83245C214.775 7.55912 215.049 7.50665 215.312 7.43012C217.519 6.02865 219.86 4.84729 222.299 3.90311C222.785 3.61885 223.256 3.30179 223.845 3.27337L226.237 2.39872C226.469 2.07292 226.842 2.31782 227.113 2.18006L232.808 0.850595C233.08 0.655987 233.423 0.795933 233.708 0.66255L234.343 0.625381C234.692 0.450452 235.092 0.586023 235.439 0.435147L236.096 0.400154C236.444 0.203359 236.864 0.450442 237.206 0.218661L238.724 0.181493C239.6 -0.0590348 240.5 0.2777 241.366 0H243.944C244.883 0.275513 245.864 -0.0590284 246.806 0.188059L247.901 0.214297C248.239 0.452638 248.657 0.214299 248.997 0.393601C251.756 0.760952 254.512 1.13705 257.217 1.81271C257.53 1.89143 257.854 1.91985 258.174 1.97233C258.533 2.16475 259.05 1.90236 259.313 2.36811C260.036 2.60426 260.71 2.99785 261.492 3.0547C261.659 3.04776 261.825 3.07994 261.977 3.14867C262.13 3.2174 262.263 3.32077 262.368 3.45048L263.683 3.92716C263.978 4.05617 264.375 3.97308 264.559 4.33824L266.267 5.04452C266.541 5.09868 266.788 5.24356 266.968 5.4556C267.277 5.5693 267.651 5.56493 267.831 5.91916C268.541 6.18156 269.044 6.81568 269.802 6.99498C270.063 7.08682 270.356 7.12837 270.459 7.43231L274.391 10.0562C275.03 10.2181 275.58 10.6231 275.924 11.1845L276.143 11.3748C276.253 11.3991 276.353 11.4526 276.435 11.5297C276.516 11.6067 276.575 11.7043 276.605 11.8121L276.824 12.0154C277.015 12.0457 277.195 12.1249 277.347 12.2452C277.498 12.3655 277.615 12.5229 277.687 12.702C278.013 13.1827 278.462 13.5666 278.988 13.8128C279.095 13.8232 279.196 13.8699 279.272 13.9451C279.349 14.0203 279.397 14.1195 279.409 14.2261L279.628 14.4448C279.878 14.4972 279.989 14.6897 280.086 14.8974L281.168 15.971C281.28 15.9936 281.381 16.0501 281.46 16.1326C281.538 16.2152 281.589 16.3199 281.606 16.4324C281.906 16.7823 282.204 17.1343 282.504 17.4863C282.604 17.5231 282.696 17.5812 282.771 17.6567C282.847 17.7323 282.905 17.8234 282.942 17.9237C283.805 18.9441 284.669 19.9689 285.535 20.998C285.706 21.0848 285.855 21.2083 285.971 21.3596C286.088 21.5108 286.169 21.6861 286.21 21.8727L287.975 24.4704C288.398 24.6191 288.492 25.0061 288.632 25.3669C289.509 26.95 290.409 28.5156 291.25 30.1162C293.113 33.68 294.601 37.4276 295.687 41.2986C296.209 41.6222 295.891 42.1994 296.093 42.6105C296.103 43.2894 296.252 43.959 296.531 44.5785C296.818 44.8321 296.531 45.2192 296.75 45.4881C296.792 46.5842 296.947 47.673 297.212 48.7374C297.462 49.1529 297.157 49.6536 297.413 50.0713C297.413 50.4277 297.433 50.7863 297.442 51.1449C297.694 52.1595 297.374 53.209 297.63 54.2236C297.63 54.8643 297.63 55.5028 297.63 56.1413C297.427 56.443 297.56 56.747 297.63 57.0509C297.616 57.1113 297.616 57.1742 297.63 57.2346C297.372 57.7266 297.667 58.2842 297.446 58.7805C297.435 59.1413 297.424 59.5021 297.411 59.8738C297.175 60.2127 297.424 60.6304 297.229 60.9671L297.19 61.8287C296.971 62.0954 297.24 62.4628 297.002 62.723C296.629 64.4723 296.256 66.2216 295.882 67.9709C295.663 68.148 295.9 68.4628 295.676 68.6378L293.902 73.667C293.915 73.7555 293.898 73.8457 293.856 73.9243C293.813 74.003 293.747 74.066 293.666 74.1043C293.519 74.4695 293.37 74.8324 293.228 75.1976C293.298 75.7836 292.879 76.1225 292.571 76.5096L289.084 82.3784C289.068 82.4907 289.02 82.596 288.945 82.6808C288.869 82.7657 288.771 82.8263 288.661 82.8551C288.586 82.8915 288.525 82.9503 288.486 83.0233C288.447 83.0962 288.431 83.1797 288.442 83.2618C288.306 83.5526 288.17 83.8435 287.837 83.9681C287.618 84.3267 287.154 84.5213 287.121 85.0111C287.079 85.2626 286.878 85.3653 286.683 85.479C286.554 85.5363 286.443 85.6276 286.362 85.7433C286.282 85.8589 286.234 85.9944 286.225 86.135C286.203 86.3931 286.006 86.4958 285.809 86.5724L285.152 87.447C285.123 87.5484 285.072 87.6421 285.003 87.7218C284.933 87.8015 284.848 87.8652 284.751 87.9084L284.491 88.302C284.353 88.5976 284.122 88.8402 283.833 88.993C283.641 89.0651 283.614 89.2379 283.575 89.4106C283.448 89.8479 283.067 90.0535 282.738 90.3049L281.643 91.6584C281.464 91.8377 281.54 92.2313 281.161 92.2488C280.814 92.4753 280.528 92.783 280.327 93.1453C280.21 93.5315 280.011 93.8878 279.744 94.1898C279.476 94.4918 279.146 94.7322 278.776 94.8946C278.167 95.2576 277.935 95.9508 277.444 96.4252C277.444 96.7117 277.188 96.7511 277.006 96.8626C275.961 97.7853 275.077 98.8524 274.172 99.9063C274.122 100.156 273.929 100.267 273.721 100.361C273.309 100.543 273.173 100.973 272.886 101.266C272.834 101.421 272.743 101.56 272.623 101.669C272.502 101.779 272.355 101.856 272.196 101.894L271.555 102.535C271.214 103.201 270.671 103.743 270.004 104.083L268.019 106.051C267.754 106.608 267.167 106.794 266.738 107.162L264.329 109.348C264.292 109.449 264.234 109.54 264.159 109.616C264.083 109.691 263.991 109.749 263.891 109.785L262.379 111.13C262.287 111.32 262.125 111.466 261.926 111.537L261.488 111.99C261.449 112.091 261.385 112.182 261.303 112.253C261.22 112.324 261.121 112.373 261.015 112.396C260.706 112.584 260.323 112.681 260.163 113.052C260.067 113.338 259.896 113.592 259.666 113.787C259.436 113.982 259.157 114.111 258.86 114.159L258.63 114.377C258.599 114.484 258.541 114.581 258.46 114.658C258.38 114.735 258.28 114.789 258.172 114.815C257.146 115.512 256.192 116.31 255.324 117.196C255.105 117.688 254.667 117.893 254.214 118.097C253.605 118.331 253.211 118.845 252.724 119.238C252.681 119.333 252.617 119.417 252.539 119.486C252.461 119.555 252.369 119.607 252.269 119.638L252.05 119.831C251.986 120.187 251.649 120.174 251.412 120.301L245.718 124.657C245.69 124.767 245.631 124.866 245.548 124.944C245.465 125.021 245.361 125.074 245.249 125.094C243.258 126.275 241.525 127.823 239.62 129.117C239.232 129.382 238.871 129.684 238.498 129.968C238.301 130.318 237.96 130.455 237.609 130.578L234.762 132.531C234.582 132.907 234.24 133.068 233.872 133.187C233.634 133.595 233.143 133.624 232.808 133.878C232.767 133.978 232.701 134.066 232.618 134.134C232.534 134.203 232.435 134.25 232.328 134.271C232.266 134.276 232.206 134.293 232.151 134.321C231.807 134.921 231.189 135.126 230.618 135.384C230.381 135.667 230.074 135.883 229.728 136.012C228.868 136.252 228.338 137.011 227.562 137.38C227.52 137.48 227.454 137.567 227.37 137.635C227.286 137.703 227.187 137.749 227.08 137.77C227.019 137.773 226.96 137.79 226.905 137.818C226.804 138.012 226.686 138.181 226.436 138.187C225.547 138.561 224.813 139.176 224.027 139.718C223.876 139.951 223.641 140.116 223.37 140.179C222.984 140.162 222.8 140.488 222.529 140.665C222.382 141.102 222.008 141.194 221.624 141.275L218.367 143.282C218.067 143.785 217.491 143.873 217.038 144.126L213.314 146.332C213.22 146.494 213.089 146.632 212.933 146.736C212.776 146.839 212.598 146.904 212.412 146.927L209.361 148.694C209.017 148.959 208.704 149.263 208.342 149.505C208.266 149.558 208.163 149.573 208.106 149.656C208.177 149.643 208.25 149.647 208.32 149.669C208.389 149.69 208.452 149.729 208.502 149.781C209.363 149.925 210.219 150.12 211.102 150.043C211.463 150.146 211.877 149.949 212.21 150.231C213.655 150.508 215.12 150.668 216.591 150.71C216.894 150.665 217.203 150.725 217.467 150.881C219 151.082 220.503 151.364 222.047 151.353C222.387 151.604 222.822 151.287 223.162 151.537C224.038 151.668 224.89 151.876 225.79 151.788C226.125 152.031 226.55 151.768 226.885 151.976L227.746 152.009C228.088 152.245 228.511 151.989 228.857 152.197L229.514 152.234C230.009 152.453 230.561 152.199 231.047 152.431C232.411 152.719 233.8 152.869 235.193 152.881C235.531 153.124 235.955 152.862 236.288 153.072L236.945 153.1C237.283 153.343 237.705 153.083 238.041 153.288L238.906 153.319C239.245 153.559 239.668 153.301 240.012 153.507C240.864 153.73 241.746 153.817 242.625 153.765C243.063 153.859 243.56 153.618 243.965 153.966H244.379C244.719 154.206 245.148 153.938 245.492 154.158L246.127 154.185C246.469 154.423 246.898 154.158 247.242 154.377C250.396 154.814 253.548 155.274 256.704 155.689C260.509 156.201 264.3 156.802 268.094 157.381C273.769 158.256 279.402 159.301 285.016 160.482C291.992 161.951 298.876 163.762 305.695 165.841C315.692 168.865 325.432 172.679 334.824 177.245C343.024 181.251 350.677 186.035 356.928 192.809C359.506 195.63 361.811 198.688 363.813 201.942C364.146 202.043 364.032 202.413 364.216 202.598C364.735 203.65 365.201 204.73 365.909 205.677C366.257 205.955 366.237 206.399 366.404 206.757L367.249 208.725C367.628 208.994 367.532 209.467 367.718 209.819L368.408 211.787C368.578 212.071 368.709 212.377 368.798 212.696C368.903 213.514 369.135 214.31 369.483 215.058C369.583 215.178 369.656 215.319 369.696 215.47C369.736 215.621 369.743 215.779 369.715 215.932C370.401 218.981 371.073 222.031 371.468 225.134C371.671 225.477 371.413 225.899 371.656 226.227L371.689 227.32C371.936 227.812 371.639 228.37 371.875 228.851C371.886 229.433 371.895 230.012 371.906 230.6C372.04 233.142 372.04 235.689 371.906 238.231L371.871 240.199C371.608 240.687 371.901 241.24 371.689 241.73C371.676 242.167 371.663 242.605 371.652 243.042C371.413 243.379 371.652 243.796 371.472 244.135C371.311 245.519 371.152 246.904 370.995 248.29C370.751 248.703 371.194 249.23 370.776 249.602C370.521 249.934 370.819 250.374 370.557 250.695C370.537 250.757 370.532 250.822 370.541 250.885C370.412 251.104 370.589 251.386 370.357 251.568C369.654 254.546 368.929 257.52 367.915 260.41C367.306 262.142 366.614 263.845 365.959 265.562C365.845 265.866 365.959 266.279 365.536 266.437L362.869 271.638C362.833 271.825 362.761 272.002 362.656 272.16C362.551 272.318 362.415 272.454 362.257 272.559C361.48 273.7 360.621 274.789 360.008 276.036C359.986 276.41 359.719 276.576 359.428 276.72L356.313 280.617C356.17 280.906 355.941 281.144 355.656 281.297L355.437 281.515C355.281 281.865 355.143 282.228 354.734 282.368L352.809 284.174C352.57 284.504 352.273 284.787 351.932 285.01L349.961 286.739C349.886 286.916 349.768 287.071 349.617 287.19C349.466 287.308 349.288 287.387 349.098 287.419L346.656 289.335C346.553 289.652 346.264 289.711 345.999 289.805L343.616 291.39C343.473 291.646 343.195 291.685 342.959 291.79L341.631 292.626C341.474 292.89 341.193 292.956 340.937 293.078L335.29 295.96C334.88 296.232 334.433 296.444 333.963 296.59L333.525 296.767C333.212 297.047 332.774 297.045 332.43 297.248C328.549 298.735 324.663 300.202 320.617 301.197C320.43 301.341 320.196 301.409 319.96 301.39L314.047 302.518C313.685 302.599 313.337 302.737 312.951 302.712L310.104 302.977C309.681 303.185 309.197 302.933 308.777 303.154L306.805 303.194C305.064 303.318 303.316 303.318 301.575 303.194L299.823 303.161C299.411 302.905 298.922 303.187 298.509 302.977L297.429 302.938C297.087 302.704 296.662 302.962 296.316 302.752L295.878 302.726C295.545 302.47 295.114 302.758 294.783 302.522L293.25 302.286C292.974 302.142 292.632 302.286 292.374 302.087C289.682 301.607 287.036 300.899 284.464 299.97C281.477 298.905 278.566 297.638 275.751 296.177C274.415 295.473 273.123 294.685 271.809 293.935C271.709 293.913 271.615 293.87 271.534 293.809C271.453 293.747 271.386 293.669 271.338 293.579C270.486 293.321 269.842 292.704 269.112 292.252C268.674 292.162 268.429 291.786 268.065 291.596C266.635 290.61 265.159 289.685 263.853 288.534C263.519 288.419 263.229 288.202 263.025 287.913C261.157 286.573 259.46 285.034 257.742 283.514C257.494 283.339 257.278 283.122 257.103 282.873H257.09C256.604 282.738 256.185 282.515 256.014 281.999L255.116 281.124C254.969 281.072 254.835 280.988 254.723 280.879C254.612 280.77 254.525 280.638 254.47 280.492L251.154 277.199C250.367 276.7 249.706 276.027 249.222 275.231L249.003 275.012C248.506 274.831 248.315 274.394 248.127 273.961L246.401 272.163C245.929 271.824 245.549 271.373 245.295 270.851L245.076 270.633C244.82 270.508 244.842 270.182 244.638 270.025C243.917 269.465 243.385 268.741 242.859 268.011C242.57 267.809 242.35 267.523 242.231 267.191C241.696 266.744 241.242 266.207 240.89 265.606C240.647 265.404 240.378 265.227 240.281 264.902L239.355 263.646C239.152 263.571 238.971 263.446 238.829 263.284C238.686 263.122 238.585 262.927 238.536 262.717C238.317 262.439 238.082 262.164 237.854 261.886C237.598 261.74 237.596 261.425 237.416 261.23C237.249 261.147 237.102 261.028 236.986 260.882C236.869 260.737 236.786 260.567 236.742 260.386C235.121 258.528 233.831 256.428 232.361 254.465C232.07 254.353 232.057 254.052 231.923 253.829L231.704 253.581C231.511 253.269 231.244 253.011 231.047 252.707C230.784 252.368 230.467 252.064 230.37 251.613C230.063 251.398 229.842 251.08 229.748 250.717L227.551 247.435C227.341 247.258 227.194 247.018 227.133 246.75C226.428 246.079 226.202 245.097 225.573 244.376C225.076 244.057 224.945 243.501 224.726 243.016C224.314 242.202 223.631 241.542 223.348 240.659C223.214 240.519 223 240.44 222.989 240.204C222.691 239.506 221.981 239.049 221.845 238.256C221.528 238.161 221.541 237.844 221.407 237.621L218.779 233.003C218.51 232.876 218.446 232.607 218.341 232.367C217.638 230.961 216.681 229.691 216.122 228.212C215.798 228.118 215.903 227.755 215.719 227.574C214.422 225.371 213.24 223.103 212.177 220.778C211.897 220.658 211.958 220.325 211.779 220.142C211.535 219.898 211.375 219.583 211.321 219.243C211.001 219.05 211.102 218.652 210.901 218.403C210.357 217.57 209.909 216.678 209.567 215.744C209.249 215.552 209.348 215.154 209.148 214.905C207.98 212.483 206.808 210.064 205.631 207.645C205.433 207.379 205.295 207.074 205.223 206.751L203.212 202.395C203.013 202.144 202.969 201.816 202.799 201.549C202.542 200.974 202.082 200.475 202.104 199.789C201.82 199.662 201.885 199.329 201.703 199.133C201.404 198.404 201.103 197.675 200.801 196.946C200.304 196.657 200.319 196.117 200.168 195.66C199.799 194.773 199.428 193.886 199.055 193.001C198.681 192.824 198.736 192.442 198.635 192.127C198.534 191.812 198.168 191.628 198.197 191.252C197.919 190.751 197.476 190.391 197.102 189.969H196.663C196.431 190.288 196.699 190.699 196.471 191.018L196.434 191.877C196.197 192.216 196.455 192.643 196.245 192.986C196.044 193.912 195.958 194.86 195.991 195.807C195.759 196.078 196.098 196.463 195.816 196.719L195.779 197.567C195.538 197.904 195.796 198.326 195.592 198.66C195.39 199.594 195.305 200.549 195.341 201.503C195.1 201.842 195.36 202.264 195.152 202.596L195.119 203.456C194.883 203.797 195.141 204.221 194.931 204.566L194.894 205.424C194.778 205.708 194.949 206.051 194.723 206.316C194.71 206.674 194.694 207.031 194.681 207.389C194.427 207.807 194.727 208.305 194.484 208.723C194.484 208.865 194.484 209.007 194.467 209.16C194.221 209.495 194.484 209.919 194.276 210.254C194.265 210.54 194.254 210.827 194.245 211.115C194.007 211.454 194.267 211.878 194.055 212.222C193.542 215.976 193.023 219.728 192.522 223.483C192.482 223.954 192.467 224.427 192.476 224.9C192.495 225.13 192.437 225.361 192.311 225.556L192.278 226.212C192.024 226.542 192.307 226.973 192.077 227.305C191.816 227.928 191.823 228.588 191.825 229.247C191.7 229.465 191.873 229.745 191.652 229.933C191.383 231.464 190.995 232.96 190.947 234.525C190.961 234.755 190.903 234.984 190.782 235.181C189.933 239.635 189.142 244.1 188.128 248.519C188.112 248.665 188.112 248.811 188.128 248.957C188.001 249.237 188.176 249.587 187.922 249.831C187.436 251.714 186.871 253.581 186.592 255.517C186.592 255.827 186.617 256.149 186.343 256.391C185.992 257.541 185.62 258.685 185.467 259.89C185.489 260.009 185.48 260.131 185.442 260.246C185.404 260.361 185.337 260.464 185.248 260.546C183.933 264.919 182.663 269.325 181.156 273.648C180.981 274.153 180.613 274.608 180.681 275.179C180.53 275.544 180.552 275.975 180.243 276.285L177.373 283.685C177.251 283.993 177.183 284.341 176.957 284.592C176.773 284.94 176.519 285.248 176.519 285.685C176.232 286.094 176.484 286.755 175.888 287.017C175.35 287.988 174.899 289.004 174.541 290.054C174.436 290.369 174.449 290.739 174.114 290.944C173.948 291.224 173.911 291.567 173.676 291.819C173.238 292.693 172.638 293.492 172.362 294.443C172.242 294.751 172.143 295.075 171.895 295.317C171.771 295.428 171.671 295.562 171.6 295.713C171.528 295.863 171.488 296.026 171.482 296.192C171.4 296.514 171.246 296.813 171.03 297.067C170.958 297.504 170.811 297.919 170.4 298.16C169.793 299.051 169.272 299.998 168.844 300.987C168.757 301.25 168.711 301.54 168.406 301.643L165.559 306.432C165.351 306.932 165.043 307.384 164.654 307.761C164.104 308.335 163.659 309.001 163.34 309.729C163.156 310.276 162.793 310.745 162.308 311.061L160.972 312.854C160.753 313.014 160.782 313.348 160.504 313.451C159.982 313.75 159.766 314.301 159.424 314.763C159.285 315.049 159.069 315.291 158.8 315.46C158.611 315.644 158.697 316.042 158.316 316.073C158.248 316.143 158.18 316.21 158.114 316.28C158.091 316.39 158.037 316.491 157.96 316.573C157.883 316.654 157.784 316.712 157.676 316.742C155.943 318.651 154.088 320.437 152.2 322.195C152.027 322.473 151.867 322.762 151.51 322.851L150.669 323.518C150.45 324.004 149.988 324.174 149.574 324.406C148.356 325.499 146.946 326.326 145.631 327.297C145.434 327.633 145.09 327.762 144.755 327.909L144.521 328.088C144.33 328.285 144.102 328.44 143.849 328.545L141.476 329.912C141.352 330.2 141.038 330.187 140.819 330.316L136.439 332.518C136.264 332.894 135.878 332.84 135.563 332.938L132.715 334.058C132.56 334.523 132.078 334.25 131.808 334.456C131.742 334.45 131.675 334.458 131.611 334.48C131.348 334.906 130.856 334.722 130.499 334.895C127.899 335.654 125.314 336.476 122.627 336.896C122.434 337.028 122.202 337.089 121.97 337.069L116.932 337.746C116.288 338.026 115.578 337.681 114.932 337.965H106.44C105.875 337.696 105.247 338.011 104.688 337.779L103.608 337.744C103.266 337.508 102.844 337.764 102.498 337.558C101.692 337.486 100.87 337.558 100.088 337.3C99.8102 337.176 99.486 337.265 99.2123 337.119L98.7742 337.093C98.5135 336.874 98.1434 337.143 97.8981 336.898C94.9017 336.478 91.9842 335.724 89.0887 334.873C86.9443 334.246 84.8263 333.55 82.7499 332.726C82.2483 332.527 81.7664 332.289 81.2736 332.052C80.9445 331.988 80.6358 331.845 80.3734 331.637L79.7338 331.375C79.4009 331.44 79.2322 331.213 79.0592 330.996C77.1361 330.415 75.5547 329.184 73.8222 328.241C72.589 327.572 71.4566 326.711 70.2804 325.947C69.8029 325.552 69.1218 325.44 68.7648 324.874C67.8383 324.353 67.1133 323.584 66.3138 322.906C66.0948 322.783 65.821 322.718 65.6983 322.455C64.9646 321.799 64.095 321.303 63.5321 320.468C62.9419 320.224 62.4624 319.772 62.1851 319.197L60.8577 317.866C60.7602 317.826 60.6729 317.765 60.6021 317.687C60.5312 317.609 60.4786 317.516 60.4482 317.415C60.0824 317.197 59.6925 317.002 59.572 316.541C57.4869 314.199 55.4411 311.831 53.8334 309.121C53.7394 309.075 53.6567 309.008 53.5906 308.927C53.5244 308.845 53.4765 308.751 53.4501 308.649L51.8928 306.264C51.7767 306.032 51.5621 305.857 51.5051 305.592C50.0168 303.244 48.7532 300.76 47.7312 298.175C47.4509 297.941 47.4815 297.565 47.3151 297.279L47.096 296.865C46.8223 296.54 46.8507 296.1 46.658 295.742C46.1787 294.699 45.7995 293.613 45.5256 292.499C45.3722 292.383 45.4533 292.173 45.3372 292.044C44.9841 291.282 44.7485 290.471 44.6385 289.639C44.2793 289.35 44.3122 288.921 44.2443 288.53C44.0055 288.206 44.0646 287.817 44.0011 287.452C43.7996 287.273 44.0011 286.967 43.8018 286.796C43.1647 284.504 42.7171 282.164 42.4635 279.799C42.2445 279.46 42.5183 279.036 42.2708 278.706L42.2379 278.05C42.0189 277.709 42.2664 277.287 42.0561 276.941C42.0386 276.504 42.0232 276.084 42.0057 275.653C41.859 275.216 41.9269 274.763 41.8371 274.324C41.824 273.598 41.8086 272.872 41.7954 272.137C41.6596 270.398 41.6596 268.65 41.7954 266.911C41.8108 266.115 41.824 265.317 41.8393 264.519C41.9598 264.158 41.6947 263.738 42.0057 263.404L42.0539 262.118C42.2883 261.777 42.032 261.353 42.2401 261.007C42.251 260.789 42.2598 260.57 42.2686 260.351C42.5161 260.017 42.2467 259.59 42.4613 259.258C42.5818 258.302 42.6387 257.34 42.9213 256.415C43.1732 256.162 42.8884 255.788 43.1228 255.541C43.1754 255.173 43.1359 254.786 43.3572 254.447C43.2148 254.167 43.3966 253.984 43.5543 253.791C43.574 253.651 43.5937 253.511 43.6112 253.372C43.593 253.253 43.6 253.131 43.6317 253.015C43.6633 252.899 43.7191 252.791 43.7952 252.698C44.0712 251.097 44.8072 249.65 45.3284 248.132C45.4282 247.82 45.5642 247.519 45.7336 247.238C45.8147 247.019 45.8957 246.801 45.979 246.582C46.1257 246.215 46.1651 245.806 46.417 245.489L47.3085 243.718Z" />
              </svg>
              <span className="text-xl font-bold">PLC</span>
            </div> */}



          </div>
        </div>
      </div>
    </section>
  );
}

export default PressLogos;
