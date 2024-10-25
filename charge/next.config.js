/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd', 'rc-util', '@ant-design', '@ant-design/icons', 
    '@ant-design/icons-svg', 'rc-pagination', 'rc-picker'],
  experimental: {
      esmExternals: 'loose',
  },
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // 모든 호스트 이름 허용
        },
      ],
  },
  async headers() {
      return [
          {
              source: '/:path*',
              headers: [
                  {
                      key: 'Content-Security-Policy',
                      value: 
                          "default-src 'self'; " +
                          "script-src 'self' 'unsafe-eval' 'unsafe-inline' dapi.kakao.com t1.daumcdn.net;" +
                          "img-src 'self' * data: dapi.kakao.com; " +
                          "style-src 'self' 'unsafe-inline';" +
                          "font-src 'self' data: *;" +  // 폰트 관련 에러 해결
                          "connect-src 'self' dapi.kakao.com http://localhost:8000; http://apis.data.go.kr https://apis.data.go.kr",
                  },
              ],
          },
      ];
  },
};

module.exports = nextConfig;