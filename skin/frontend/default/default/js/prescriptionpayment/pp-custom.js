/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * @package    Ce_PrescriptionPayment
 * @copyright  Copyright (c) 2013 codedge (http://www.codedge.de)
 * @author     Holger Lösken <post@codedge.de>
 */

if (typeof jQuery != 'undefined') {
    jQuery(document).ready(function() {

        // Check radio buttons after load
        if(jQuery("input[name='prescriptionpayment_choose_payment']:checked").val() == 0) {
            jQuery('#prescriptionpayment-form fieldset,' +
                   '.block-prescriptionpayment, .upload-prescription').css('display', 'none');
        } else {
            jQuery('#prescriptionpayment-form fieldset,' +
                   '.block-prescriptionpayment, .upload-prescription').css('display', 'block');
        }

        jQuery("input[name='prescriptionpayment_choose_payment']").click(function() {
            if(jQuery(this).val() == 0) {
                jQuery('#prescriptionpayment-form fieldset,' +
                       '.block-prescriptionpayment, .upload-prescription').css('display', 'none');
            } else {
                jQuery('#prescriptionpayment-form fieldset,' +
                       '.block-prescriptionpayment, .upload-prescription').css('display', 'block');
            }
        });

        // Select all items
        jQuery("button[name='select_all_prescription']").click(function() {
            jQuery('#prescriptionpayment-form').find(':checkbox').each(function () {
                jQuery(this).prop('checked', 'checked');
            });
        });
    });
}
