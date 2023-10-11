import { View, Text, Pressable, ScrollView } from "react-native";
import checkoutConfirmation from "../../../styles/components/cart/checkoutConfirmation";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../constants/theme";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

const CheckoutConfirmation = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { checkoutData, grandTotal } = route.params;

    const [serviceFee, setServiceFee] = useState(50);
    const [deliveryFee, setDeliveryFee] = useState(1000);

    const formattedServiceFee = serviceFee.toFixed(2);
const formattedDeliveryFee = deliveryFee.toFixed(2);

    const vat = () => {
        const vatPrice = ((7 / 100) * grandTotal).toFixed(2);
        return vatPrice;
    };

    const GrandOrderTotalVatIncluded = () => {
        const vatPrice = ((7 / 100) * grandTotal).toFixed(2);
        const allItemsTotal = parseFloat(grandTotal) + parseFloat(formattedServiceFee) + parseFloat(formattedDeliveryFee) + parseFloat(vatPrice);
        return (allItemsTotal.toFixed(2));
    };

    return (
        <View style={checkoutConfirmation.container}>
        <View style={checkoutConfirmation.outerWrapper}>
            <View style={checkoutConfirmation.headerContainer}>
            <View style={checkoutConfirmation.headerBackIcon}>
                <Pressable
                onPress={() => {
                    navigation.goBack();
                }}
                >
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={24}
                    color={COLORS.black}
                />
                </Pressable>
            </View>
            <View>
                <Text style={checkoutConfirmation.header}>Order Confirmation</Text>
            </View>
            </View>

            <ScrollView>
            <View style={checkoutConfirmation.section}>
                <View style={checkoutConfirmation.deliveryContainer}>
                <MaterialIcons
                    name="location-on"
                    size={24}
                    color={COLORS.goldenrod}
                />
                <View style={checkoutConfirmation.deliveryInnerContent}>
                    <View>
                    <Text style={checkoutConfirmation.deliveryContainerText}>
                        Delivery Location
                    </Text>
                    <Text style={checkoutConfirmation.deliveryMainText}>
                        Address To Deliver
                    </Text>
                    </View>
                    <View>
                    <MaterialIcons
                        name="edit"
                        size={24}
                        color={COLORS.tabBarBrown}
                    />
                    </View>
                </View>
                </View>

                <View style={checkoutConfirmation.deliveryContainer}>
                <MaterialIcons name="phone" size={24} color={COLORS.goldenrod} />
                <View style={checkoutConfirmation.deliveryInnerContent}>
                    <View>
                    <Text style={checkoutConfirmation.deliveryContainerText}>
                        Phone Number
                    </Text>
                    <Text style={checkoutConfirmation.deliveryMainText}>
                        Delivery Phone Number
                    </Text>
                    </View>
                    <View>
                    <MaterialIcons
                        name="edit"
                        size={24}
                        color={COLORS.tabBarBrown}
                    />
                    </View>
                </View>
                </View>

                <View style={checkoutConfirmation.deliveryContainer}>
                <MaterialIcons
                    name="credit-card"
                    size={24}
                    color={COLORS.goldenrod}
                />
                <View style={checkoutConfirmation.deliveryInnerContent}>
                    <View>
                    <Text style={checkoutConfirmation.deliveryContainerText}>
                        Payment
                    </Text>
                    <Text style={checkoutConfirmation.deliveryMainText}>
                        Choose Payment Method
                    </Text>
                    </View>
                    <View>
                    <MaterialIcons
                        name="edit"
                        size={24}
                        color={COLORS.tabBarBrown}
                    />
                    </View>
                </View>
                </View>
            </View>

            <View style={checkoutConfirmation.section}>
                <Text style={checkoutConfirmation.sectionTitle}>Items</Text>
                <View>
                {checkoutData.map((item, index) => (
                    <View
                    key={item.productId} // Use a unique key here
                    style={checkoutConfirmation.productItem}
                    >
                    <Text style={checkoutConfirmation.productItemText}>
                        x {item.quantity} {item.productName}
                    </Text>
                    <Text style={checkoutConfirmation.productItemText}>
                        N{item.totalItemPrice}
                    </Text>
                    </View>
                ))}
                </View>
            </View>
            <View style={checkoutConfirmation.calcs}>
                <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>Subtotal</Text>
                <Text style={checkoutConfirmation.totalAmount}>
                    N {grandTotal}
                </Text>
                </View>
                <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>Service Fee</Text>
                <Text style={checkoutConfirmation.totalAmount}>N {formattedServiceFee}</Text>
                </View>
                <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>VAT (7%)</Text>
                <Text style={checkoutConfirmation.totalAmount}>N {vat()}</Text>
                </View>
                <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>Delivery Fee</Text>
                <Text style={checkoutConfirmation.totalAmount}>N {formattedDeliveryFee}</Text>
                </View>
            </View>
            <Pressable style={checkoutConfirmation.voucher}>
                <View style={{flexDirection: "row", width: "100%"}}>
                    <MaterialIcons
                name="confirmation-number"
                size={24}
                color={COLORS.black}
                />
                <Text style={checkoutConfirmation.voucherText}>Voucher Code?</Text>
                </View>
            </Pressable>
            <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>
                Total (Incl. VAT)
                </Text>
                <Text style={checkoutConfirmation.totalAmount}>
                N {GrandOrderTotalVatIncluded()}
                </Text>
            </View>
            <Pressable style={checkoutConfirmation.placeOrderButton}>
                <Text style={checkoutConfirmation.placeOrderButtonText}>
                PLACE ORDER
                </Text>
            </Pressable>
            </ScrollView>
        </View>
        </View>
    );
};

export default CheckoutConfirmation;
