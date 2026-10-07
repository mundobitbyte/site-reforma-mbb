const { test, expect } = require('@playwright/test');

test('cliente consegue adicionar dois salgados e finalizar o pedido', async ({ page }) => {
  await page.goto('/');

  const salgado = page.locator('.produto-card').filter({ hasText: 'Salgado' });
  await salgado.locator('.quantidade').fill('2');
  await salgado.getByRole('button', { name: 'Adicionar' }).click();

  await expect(page.locator('#subtotal')).toHaveText('R$ 16,00');

  await page.getByRole('button', { name: 'Finalizar pedido' }).click();

  await expect(page.locator('#mensagem')).toContainText('realizado com sucesso');
  await expect(page.locator('#mensagem')).toContainText('R$ 16,00');
});
