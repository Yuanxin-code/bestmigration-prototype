/* Store migration prototype data. Production values are returned by the migration task API. */
(function () {
  window.DATA_STORE_MIGRATION = {
    platforms: [
      { id: 'shopify', name: 'Shopify', available: true, badge: 'S' },
      { id: 'shopline', name: 'SHOPLINE', available: false, badge: 'SL' },
      { id: 'woocommerce', name: 'WooCommerce', available: false, badge: 'W' }
    ],
    modules: [
      { id: 'customers', label: '客户', to: '#/customers', estimate: '约 1 分钟', count: '2,806' },
      { id: 'products', label: '商品', to: '#/products', estimate: '约 3 分钟', count: '328,000' },
      { id: 'discounts', label: '折扣', to: '#/discounts', estimate: '约 1 分钟', count: '12' },
      { id: 'orders', label: '订单', to: '#/orders', estimate: '约 2 分钟', count: '1,250' },
      { id: 'shipping', label: '运费', to: '#/settings/shipping-rates', estimate: '约 1 分钟', count: '48' },
      { id: 'locations', label: '发货地', to: '#/settings/shippable-locations', estimate: '约 1 分钟', count: '3' }
    ],
    records: [
      {
        id: 'migration-20260730-01', platform: 'Shopify', store: 'asfjksj',
        moduleIds: ['customers', 'products', 'discounts', 'orders', 'shipping', 'locations'],
        startedAt: '2026-07-30 15:18', duration: '6 分 42 秒', result: '存在异常',
        failed: ['shipping'], completed: ['customers', 'products', 'discounts', 'orders', 'locations']
      },
      {
        id: 'migration-20260729-02', platform: 'Shopify', store: 'lovocross-us',
        moduleIds: ['customers', 'products', 'discounts'],
        startedAt: '2026-07-29 11:42', duration: '4 分 16 秒', result: '完成',
        failed: [], completed: ['customers', 'products', 'discounts']
      }
    ],
    failures: {
      shipping: {
        title: '运费搬迁失败详情',
        summary: '有 6 条运费规则未能匹配目标店铺的配送区域。',
        guidance: '请先在「运费设置」中创建或匹配对应配送区域，再重新尝试该模块。',
        filename: '运费异常数据.csv',
        columns: ['运费规则', '配送区域', '异常原因'],
        rows: [
          ['标准配送', 'North America', '目标店铺不存在对应配送区域'],
          ['加急配送', 'Europe', '目标店铺不存在对应配送区域'],
          ['满额包邮', 'Australia', '目标店铺不存在对应配送区域'],
          ['国际配送', 'Asia Pacific', '目标店铺不存在对应配送区域'],
          ['偏远地区配送', 'Alaska', '目标店铺不存在对应配送区域'],
          ['偏远地区配送', 'Hawaii', '目标店铺不存在对应配送区域']
        ]
      }
    }
  };
})();
